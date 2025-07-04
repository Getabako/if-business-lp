/**
 * if(Business) お問い合わせフォーム処理
 * スプレッドシートURL: https://docs.google.com/spreadsheets/d/1bRaJBgNaEyuF9QwFEwjCWS2lGdeDAltA9x21IrVuKAM/edit
 */

// スプレッドシートID（URLから抽出）
const SPREADSHEET_ID = '1bRaJBgNaEyuF9QwFEwjCWS2lGdeDAltA9x21IrVuKAM';
const SHEET_NAME = 'シート1'; // シート名（必要に応じて変更）

/**
 * CORS対応のためのGETリクエスト処理
 */
function doGet(e) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
  
  const output = ContentService.createTextOutput(JSON.stringify({ 
    status: 'ready',
    message: 'Form handler is ready' 
  }));
  output.setMimeType(ContentService.MimeType.JSON);
  
  Object.keys(corsHeaders).forEach(key => {
    output.setHeader(key, corsHeaders[key]);
  });
  
  return output;
}

/**
 * フォームデータを受信してスプレッドシートに保存し、メール通知を送信
 */
function doPost(e) {
  try {
    // CORS対応ヘッダー
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    
    // OPTIONSリクエストの場合
    if (!e.parameter) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'ok' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // フォームデータを取得
    const formData = {
      name: e.parameter.name || '',
      email: e.parameter.email || '',
      company: e.parameter.company || '',
      phone: e.parameter.phone || '',
      service: e.parameter.service || '',
      message: e.parameter.message || '',
      timestamp: new Date()
    };
    
    // バリデーション
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error('必須項目が入力されていません');
    }
    
    // スプレッドシートに保存
    saveToSpreadsheet(formData);
    
    // メール通知送信
    sendNotificationEmails(formData);
    
    // 成功レスポンス
    const output = ContentService.createTextOutput(JSON.stringify({ 
      status: 'success', 
      message: 'お問い合わせを受け付けました' 
    }));
    output.setMimeType(ContentService.MimeType.JSON);
    
    // CORSヘッダーを設定
    Object.keys(corsHeaders).forEach(key => {
      output.setHeader(key, corsHeaders[key]);
    });
    
    return output;
    
  } catch (error) {
    console.error('Error:', error);
    
    // エラーレスポンス
    const errorOutput = ContentService.createTextOutput(JSON.stringify({ 
      status: 'error', 
      message: error.toString() 
    }));
    errorOutput.setMimeType(ContentService.MimeType.JSON);
    
    // CORSヘッダーを設定
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    Object.keys(corsHeaders).forEach(key => {
      errorOutput.setHeader(key, corsHeaders[key]);
    });
    
    return errorOutput;
  }
}

/**
 * スプレッドシートにデータを保存
 */
function saveToSpreadsheet(formData) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  // ヘッダー行が存在しない場合は作成
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, 8).setValues([[
      '受信日時', 'お名前', 'メールアドレス', '会社名・団体名', 
      '電話番号', 'ご興味のあるサービス', 'お問い合わせ内容', 'ステータス'
    ]]);
  }
  
  // データを追加
  const newRow = [
    formData.timestamp,
    formData.name,
    formData.email,
    formData.company,
    formData.phone,
    formData.service,
    formData.message,
    '新規'
  ];
  
  sheet.appendRow(newRow);
}

/**
 * メール通知を送信
 */
function sendNotificationEmails(formData) {
  // 管理者宛通知メール
  sendAdminNotification(formData);
  
  // 送信者宛確認メール
  sendConfirmationEmail(formData);
}

/**
 * 管理者宛通知メール送信
 */
function sendAdminNotification(formData) {
  const subject = `【if(Business)】新規お問い合わせ - ${formData.name}様`;
  
  const body = `
新しいお問い合わせを受信しました。

■ 受信日時
${formData.timestamp.toLocaleString('ja-JP')}

■ お客様情報
お名前: ${formData.name}
メールアドレス: ${formData.email}
会社名・団体名: ${formData.company || '（未記入）'}
電話番号: ${formData.phone || '（未記入）'}

■ ご興味のあるサービス
${formData.service || '（未選択）'}

■ お問い合わせ内容
${formData.message}

---
スプレッドシートで詳細を確認:
https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit

if(Business) 自動通知システム
`;

  GmailApp.sendEmail(
    'info@if-juku.net',
    subject,
    body
  );
}

/**
 * 送信者宛確認メール送信
 */
function sendConfirmationEmail(formData) {
  const subject = `【if(Business)】お問い合わせを受け付けました - ${formData.name}様`;
  
  const body = `
${formData.name} 様

この度は、if(Business)にお問い合わせいただき、誠にありがとうございます。
以下の内容でお問い合わせを受け付けいたしました。

■ 受信日時
${formData.timestamp.toLocaleString('ja-JP')}

■ お客様情報
お名前: ${formData.name}
メールアドレス: ${formData.email}
会社名・団体名: ${formData.company || '（未記入）'}
電話番号: ${formData.phone || '（未記入）'}

■ ご興味のあるサービス
${formData.service || '（未選択）'}

■ お問い合わせ内容
${formData.message}

---

【今後の流れ】
・営業日2-3日以内に担当者よりご連絡いたします
・緊急のご相談の場合は、お電話（080-4937-7121）でもお受けしております
・より詳しい資料やお見積りが必要な場合は、個別にご提供いたします

【if(Business)のサービス概要】
◆ AIパーソナル顧問プラン
　最新のAI活用について経営者向けの個別相談

◆ AI人材育成プラン  
　社員のAIスキル向上のための研修・教育

◆ AI開発支援プラン
　オリジナルAIシステムの構築支援

◆ ICT開発サービス
　Webサイト・アプリ・ゲームの開発

◆ AIマーケティングサポート
　SNS運用・広告・デザインでのブランド力向上

ご不明な点がございましたら、お気軽にお問い合わせください。
お客様の事業成功に向けて、全力でサポートいたします。

---
株式会社if
〒住所情報
TEL: 080-4937-7121
EMAIL: info@if-juku.net
WEB: https://if-business-lp.vercel.app

本メールは自動送信です。このメールに返信いただいても対応できませんので、
ご質問等は改めて上記連絡先までお願いいたします。
`;

  GmailApp.sendEmail(
    formData.email,
    subject,
    body
  );
}

/**
 * テスト用関数
 */
function testFormSubmission() {
  const testData = {
    name: 'テスト太郎',
    email: 'test@example.com',
    company: 'テスト株式会社',
    phone: '080-1234-5678',
    service: 'AIパーソナル顧問プラン',
    message: 'AIの導入について相談したいです。',
    timestamp: new Date()
  };
  
  saveToSpreadsheet(testData);
  sendNotificationEmails(testData);
  
  console.log('テスト送信完了');
}