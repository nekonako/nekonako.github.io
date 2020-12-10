const withReactSvg = require('next-react-svg')
const path = require('path')
const withPWA = require('next-pwa')
const withCSS = require('@zeit/next-css');

module.exports = withReactSvg({
  include : path.resolve(__dirname, 'public/assets/icon'),
  webpack(config, options) {
    return config
  }
})

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/',
    sw: 'service-worker.js',
  }
})

