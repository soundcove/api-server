['users/register',
 'users/login',
 'users/get',
 'session/destroy',
 'session/user',
 'session/renew'
].forEach(function(method) {
  exports[method] = require('./' + method);
});

// For checking if a method exists.
exports.all = Object.keys(exports);
