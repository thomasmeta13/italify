const fs = require('fs')
const path = require('path')
const https = require('https')

// Create the public directory if it doesn't exist
const publicDir = path.join(__dirname, '../public')
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir)
}

// Curated list of Tuscany and Florence images from Unsplash
const images = [
  {
    url: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c',
    alt: 'Tuscany rolling hills with cypress trees'
  },
  {
    url: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd',
    alt: 'Florence Duomo and cityscape'
  },
  {
    url: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b',
    alt: 'Tuscan villa and countryside'
  },
  {
    url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
    alt: 'Tuscany landscape with wheat field'
  },
  {
    url: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2',
    alt: 'Florence Ponte Vecchio bridge'
  },
  {
    url: 'https://images.unsplash.com/photo-1523528283115-9bf9b1699245',
    alt: 'Tuscan vineyard at sunset'
  }
]

// Function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`))
        return
      }

      const file = fs.createWriteStream(path.join(publicDir, filename))
      response.pipe(file)

      file.on('finish', () => {
        file.close()
        resolve()
      })

      file.on('error', (err) => {
        fs.unlink(filename)
        reject(err)
      })
    }).on('error', reject)
  })
}

// Download all images
async function downloadAllImages() {
  console.log('Downloading images of Florence and Tuscany...')
  
  for (let i = 0; i < images.length; i++) {
    const filename = `instagram-${i + 1}.jpg`
    try {
      await downloadImage(images[i].url, filename)
      console.log(`Downloaded ${filename} - ${images[i].alt}`)
    } catch (error) {
      console.error(`Failed to download ${filename}:`, error)
    }
  }
  
  console.log('All images downloaded successfully!')
}

// Run the download
downloadAllImages() 