const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  },
  env: {
    WHOISAPI_KEY: 'at_wIUS3IPGAolVpRSihubPI4bhPzSTs',
  },
})