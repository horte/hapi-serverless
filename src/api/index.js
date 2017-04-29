const Server = require('./server')

exports.handler = (event, context, callback) => {
  new Server().start()
    .then((server) => {
      // map lambda event to hapi request
      const options = {
        method: event.httpMethod,
        url: event.path,
        payload: event.body,
        headers: event.headers,
        validate: false
      }

      server.inject(options, function (res) {
        const response = {
          statusCode: res.statusCode,
          body: res.result
        }
        callback(null, response)
      })
    })
}
