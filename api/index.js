const Hapi = require('@hapi/hapi');
const routes = require('../src/routes');

const server = Hapi.server({
  port: process.env.PORT || 5000,
  host: '0.0.0.0',
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});

server.route(routes);

module.exports = async (req, res) => {
  if (!server.info.started) {
    await server.start();
  }
  server.listener(req, res);
};
