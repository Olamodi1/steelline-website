const sharp = require('sharp');

async function run() {
  // Square icon logo — LinkedIn profile/company logo (300x300 min recommended)
  await sharp('logo-icon.svg', { density: 384 })
    .resize(500, 500)
    .png()
    .toFile('logo-icon-500.png');

  // Horizontal lockup — for cover banner / website header use
  await sharp('logo-horizontal.svg', { density: 300 })
    .resize(1128, 260)
    .png()
    .toFile('logo-horizontal-1128x260.png');

  console.log('done');
}

run().catch(e => { console.error(e); process.exit(1); });
