const Hapi = require('hapi')

module.exports = class Server {
  constructor () {
    this.server = new Hapi.Server()
  }

  setupConnection () {
    this.server.connection({routes: {cors: true}})
  }

  registerPlugins () {
    return new Promise((resolve, reject) => {
      this.server.register(
        [
          require('./modules/commons')
        ],
        (err) => {
          if (err) {
            return reject(err)
          }
          return resolve()
        })
    })
  }

  _initServer () {
    return new Promise(resolve => {
      this.server.start(() => {
        console.info('==> Server is listening.')
        this.server.connections.forEach((connection) => {
          console.info('==>', connection.settings.labels, connection.info.uri)
          resolve()
        })
      })
    })
  }

  start () {
    return new Promise(resolve => {
      this.setupConnection()
      this.registerPlugins()
        .then(() => this._initServer)
        .then(() => (resolve(this.server)))
        .catch(ex => console.error)
    })
  }
}
