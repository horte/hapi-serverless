const routes = require('./routes')

exports.register = function (plugin, options, next) {
  plugin.route(routes)
  next()
}

exports.register.attributes = {
  pkg: {
    name: 'commons',
    version: '0.0.1',
    description: 'General things common for the running of the server',
    main: 'index.js'
  }
}
