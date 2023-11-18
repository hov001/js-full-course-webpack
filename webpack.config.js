const path = require('path')

const mainPath = path.resolve(__dirname)

console.log('mainPath:::', mainPath)

const mode = process.env

console.log('mode:::', mode)

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
}