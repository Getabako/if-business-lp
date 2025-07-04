# GitHubアップロードの回避策

## 問題
- Git pushでファイルサイズエラーが発生
- ローカルからのプッシュが困難

## 解決策：GitHubのWeb UIで個別アップロード

### 手順1: 動画パスを外部ホスティングに変更（完了済み）
✅ HeroSectionで動画パスを `https://if-juku.net/wp-content/uploads/videos/` に変更済み

### 手順2: GitHubで画像を個別アップロード

1. **GitHub Web UIでファイルアップロード**：
   - https://github.com/Getabako/if-business-lp/tree/main/public/images
   - 「Add file」→「Upload files」をクリック
   - **1ファイルずつ**画像をアップロード
   - 各ファイルごとにコミット

2. **アップロード順序（推奨）**：
   ```
   第1回: -1.png (ロゴ、54KB)
   第2回: 4.png (988KB)
   第3回: 2.png (1.3MB)
   第4回: 1.png (1.4MB)
   第5回: 5.png (1.5MB)
   ...以下続く
   ```

### 手順3: エックスサーバーに動画ファイルをアップロード

1. **FTPで以下のディレクトリにアップロード**：
   ```
   /wp-content/uploads/videos/lpmoviepc.mp4
   /wp-content/uploads/videos/lpmoviesp.mp4
   ```

2. **CORS設定のため.htaccessを作成**：
   - ディレクトリ: `/wp-content/uploads/`
   - ファイル名: `.htaccess`
   - 内容:
   ```apache
   <IfModule mod_headers.c>
       Header set Access-Control-Allow-Origin "*"
       Header set Access-Control-Allow-Methods "GET, OPTIONS"
   </IfModule>
   <FilesMatch "\.(mp4|png|jpg|jpeg)$">
       Order allow,deny
       Allow from all
   </FilesMatch>
   ```

### 手順4: ローカルの変更をプッシュ

HeroSectionの変更のみをプッシュ：
```bash
git add components/HeroSection.tsx
git commit -m "Update video paths to use server hosting"
git push origin main
```

## 重要な注意点
- 画像ファイルは1つずつアップロードする
- 動画ファイルはエックスサーバーでホスティング
- CORS設定を必ず行う

## エックスサーバーでのCORS設定が重要
Vercelからif-juku.netのリソースにアクセスできるようにするため、必ずCORS設定を行ってください。