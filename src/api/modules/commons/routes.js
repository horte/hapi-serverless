module.exports = [
  {
    path: '/favicon.ico',
    method: 'GET',
    config: {
      auth: false,
      cache: {
        expiresIn: 1000 * 60 * 60 * 24 * 21
      }
    },
    handler: (request, reply) => reply().code(204).type('image/x-icon')
  },
  {
    path: '/ping',
    method: 'GET',
    config: {
      auth: false,
      cache: {
        expiresIn: 1000 * 60 * 60 * 24 * 21
      }
    },
    handler: (request, reply) => reply('pong').code(200)
  }
]
