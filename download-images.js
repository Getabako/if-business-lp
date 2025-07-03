const fs = require('fs');
const path = require('path');
const https = require('https');

// 使用中の画像URL一覧
const imageUrls = [
  // ロゴ
  'https://service.if-juku.net/wp-content/uploads/2025/07/if塾ロゴ正式版-1.png',
  
  // 動画
  'https://service.if-juku.net/wp-content/uploads/2025/04/lpmoviepc.mp4',
  'https://service.if-juku.net/wp-content/uploads/2025/04/lpmoviesp.mp4',
  
  // 背景画像
  'https://service.if-juku.net/wp-content/uploads/2025/04/An_abstract_background_representing_data_analysis_-1745739047865-scaled.png',
  'https://service.if-juku.net/wp-content/uploads/2025/04/scroll1.png',
  'https://service.if-juku.net/wp-content/uploads/2025/04/ChatGPT-Image-2025年4月27日-17_01_26.png',
  'https://service.if-juku.net/wp-content/uploads/2025/04/ChatGPT-Image-2025年4月27日-16_58_29.png',
  'https://service.if-juku.net/wp-content/uploads/2025/04/ChatGPT-Image-2025年4月27日-17_05_49.png',
  'https://service.if-juku.net/wp-content/uploads/2025/04/匠の工房でコンピューター製作.png',
  'https://service.if-juku.net/wp-content/uploads/2025/04/イノクラの仮想世界.png',
  
  // サービス画像
  'https://service.if-juku.net/wp-content/uploads/2025/04/1.png',
  'https://service.if-juku.net/wp-content/uploads/2025/04/2.png',
  'https://service.if-juku.net/wp-content/uploads/2025/04/3.png',
  'https://service.if-juku.net/wp-content/uploads/2025/04/4.png',
  'https://service.if-juku.net/wp-content/uploads/2025/04/5-scaled.png',
  'https://service.if-juku.net/wp-content/uploads/2025/04/6-scaled.png',
  'https://service.if-juku.net/wp-content/uploads/2025/04/7.png',
  'https://service.if-juku.net/wp-content/uploads/2025/04/8.png',
  'https://service.if-juku.net/wp-content/uploads/2025/04/9.png'
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve(filepath);
        });
      } else {
        console.log(`✗ Failed to download: ${url} (${response.statusCode})`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.log(`✗ Error downloading: ${url}`);
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('🚀 Starting image download...\n');
  
  const promises = imageUrls.map(url => {
    const urlPath = new URL(url).pathname;
    const localPath = path.join('./public', urlPath);
    return downloadImage(url, localPath);
  });

  try {
    await Promise.all(promises);
    console.log('\n🎉 All images downloaded successfully!');
    console.log('\n📝 Next steps:');
    console.log('1. Run the URL replacement script');
    console.log('2. Test locally with: npm run dev');
    console.log('3. Build and deploy: npm run build');
  } catch (error) {
    console.error('\n❌ Some downloads failed:', error.message);
    console.log('Please check your internet connection and try again.');
  }
}

downloadAllImages(); 