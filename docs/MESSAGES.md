## Messages
All messages (from the client or server) consist of two parts, a method and payload.  The message body is an array resembling `[method, payload]`.  The method is a string and the payload is an object.

An example of a message would look like this:
```javascript
["user/login", {
  "username": "Foobar",
  "password": "12345678",
}]
```

### Method
The method describes the message's purpose.  For requests you can describe the action with `<namespace>/<action>` (i.e. `user/register` or `session/destroy`), and for server responses you have `success` and `error` methods.

See [Methods](METHODS.md) for a list of methods and their options.

### Payload
The payload is an object of data you supply to for the method request. For example, if you did `user/login` it would be the credentials.  In a reply, the payload would be the response data.
