const fs = require('fs')
const path = require('path')

const selectRandomPost = _ => {
  const postsDirectory = path.join(process.cwd(), 'content/posts')
  const files = fs.readdirSync(postsDirectory)
    .filter(file => path.extname(file) === '.md')
  const selected = files[Math.floor(Math.random() * files.length)]
  const parsed = fs.readFileSync(path.join(postsDirectory, selected), 'utf8')
  return [selected, parsed.split('\n\n')[0]]
}

const [file, data] = selectRandomPost()
module.exports = {
  shortHands: {
    featuredPost: {
      template: 'featuredPost.pug',
      file: path.basename(file, '.md'),
      data
    }
  }
}
