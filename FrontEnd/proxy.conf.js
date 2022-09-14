const argv = require('minimist')(process.argv.slice(2));

const proxyTargets = {
  dev: {
    '/api': {
      target: 'http://127.0.0.1:8080',
      secure: false,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
};

module.exports = proxyTargets[argv['configuration'] || 'dev'];