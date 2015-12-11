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
  //Get client id
    let user = members[client.id] = {};
    user.name = data.username;
    user.password = data.password;
    //Create tokenID to distinguish user
    let success = {
      'method' : 'success',
      'tokenID' : ''
    }
    //Let's client know it's logged in.
    Client.prototype.write(JSON.stringify(succes));
  });

  //Now whenever client sends anything, if it doesn't equal tokenID, the API-Server will end socket with authentication error.


  client.on('disconnect', function(data)){
    //delete client from REDIS server
  }
});

app.listen(8080);
