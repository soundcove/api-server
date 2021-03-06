var response = require('../../response');

var success = response('success');

module.exports = function sessionDestroy(socket, pg, redis, payload) {
  var session = payload.session;

  // Validate session token.
  socket.user(session, function() {
    // Delete session.
    redis.del(session, function(err) {
      if (err) return socket.error('ServiceInternal');
      socket.send(success);
    });
  }, true);
};
