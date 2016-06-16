## `error` method
The `error` method is sent whenever a request fails.  The payload has a `"type"` with the name of the error.  For example:
```javascript
["error", {
  "type": "ServiceInternal"
}]
```
Errors should be prevented client-side by the application wherever possible.

## `success` method
The `success` method is for any successful response.  The payload could be any type of response data.

## `user/register` method
Create a new user and session.

Takes a `"username"`, `"password"`, and `"email"`:
```javascript
["user/register", {
  "username": "Foobar",
  "password": "1234578",
  "email": "foo@bar.baz"
}]
```
If successful, server responds with `"session"`:
```javascript
["success", {
  "session": "2b4e133be10b4f0b13bd75f3caf2bafb"
}]
```

## `user/login` method
Create a server session.

Takes a `"email"`, `"password"`:
```javascript
["user/login", {
  "email": "foo@bar.baz",
  "password": "1234578"
}]
```
If successful, server responds with `"session"`:
```javascript
["success", {
  "session": "2b4e133be10b4f0b13bd75f3caf2bafb"
}]
```

## `user/get` method
Fetch a user from their id.

Takes `"id"`:
```javascript
["user/get", {
  "id": "1034"
}]
```
If successful, server responds with user data:
```javascript
["success", {
  "id": "1034",
  "username": "Foobar"
}]
```

## `session/user` method
Fetch a user of a given session

Takes a `"session"` token:
```javascript
["session/user", {
  "session": "2b4e133be10b4f0b13bd75f3caf2bafb"
}]
```
If successful, server responds with user data:
```javascript
["success", {
  "id": "1034",
  "username": "Foobar",
  "email": "foo@bar.baz"
}]
```

## `session/renew` method
Renew a session token.

Takes a `"session"` token:
```javascript
["session/renew", {
  "session": "2b4e133be10b4f0b13bd75f3caf2bafb"
}]
```
If successful, `"success"` method.
```javascript
["success", {}]
```

## `session/destroy` method
Destroy a session token.

Takes a `"session"` token:
```javascript
["session/destroy", {
  "session": "2b4e133be10b4f0b13bd75f3caf2bafb"
}]
```
If successful, `"success"` method.
```javascript
["success", {}]
```
