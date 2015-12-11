"use strict";

const
  rela = require('rela'),
  Server = rela.Server,
  api = new Server(),

let crypto = require('crypto');

let members = [];
api.on('connection', function(client) {
client.use('method');

client.on('authenticate', function(data) {
  //Todo - Check with MYSQL Server
  //Change members is temporary for testing, switching to REDIS.
    let user = members[client.id] = {};
    user.name = data.username;
    user.password = data.password;
    //Create tokenID to distinguish user
    var success = {
      'method' : 'success',
      'tokenID' : 'test'
    }
    Client.prototype.write(JSON.stringify(succes));
  });
client.on('success', function(data)){

}

});

app.listen(8080);
