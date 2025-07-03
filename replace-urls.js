const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 置換対象のディレクトリ
const targetDirs = ['components', 'app'];

// URL置換マッピング
const urlReplacements = {
  'https://service.if-juku.net/wp-content/uploads/': '/wp-content/uploads/',
};

function replaceInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    Object.entries(urlReplacements).forEach(([oldUrl, newUrl]) => {
      const regex = new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      if (content.includes(oldUrl)) {
        content = content.replace(regex, newUrl);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Updated: ${path.relative('.', filePath)}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function replaceAllUrls() {
  console.log('🚀 Starting URL replacement...\n');
  
  let totalFiles = 0;
  let modifiedFiles = 0;

  targetDirs.forEach(dir => {
    const pattern = path.join(dir, '**/*.{tsx,ts}');
    const files = glob.sync(pattern);
    
    files.forEach(file => {
      totalFiles++;
      if (replaceInFile(file)) {
        modifiedFiles++;
      }
    });
  });

  console.log(`\n📊 Summary:`);
  console.log(`Total files checked: ${totalFiles}`);
  console.log(`Files modified: ${modifiedFiles}`);
  
  if (modifiedFiles > 0) {
    console.log('\n🎉 URL replacement completed!');
    console.log('\n📝 Next steps:');
    console.log('1. Test locally: npm run dev');
    console.log('2. Check all images load correctly');
    console.log('3. Build for production: npm run build');
  } else {
    console.log('\n💡 No files needed modification.');
  }
}

// Check if glob is available
try {
  require.resolve('glob');
  replaceAllUrls();
} catch (e) {
  console.log('⚠️  Installing required dependency: glob');
  console.log('Run: npm install glob --save-dev');
  console.log('Then run this script again.');
} 