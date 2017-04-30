const URL = require('url')
const Server = require('./server')

exports.handler = (event, context, callback) => {
  new Server().start()
    .then((server) => {
      // map lambda event to hapi request
     const url = URL.format(
        {
          pathname: event.path,
          query: event.queryStringParameters
        }
      )
    
      const options = {
        method: event.httpMethod,
        url,
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
