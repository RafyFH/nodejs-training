# User API Spec

## Register User API

Endpoint: Post /api/users

Request Body:

```json
{
  "username": "adamsuseno",
  "password": "secret",
  "name": "Adam Suseno"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "adamsuseno",
    "name": "Adam Suseno"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username Already Registered"
}
```

## Login User API

Endpoint: Post /api/users/login

Request Body:

```json
{
  "username": "adamsuseno",
  "password": "secret"
}
```

Response Body Success:

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error: 
```json
{
  "errors": "username or password wrong"
}
```

## Update User API

Endpoint: FETCH /api/users/current

Headers:
- Authorization : token

Request Body:

```json
{
  "password": "secret", //optional
  "name": "Adam Suseno" //optional
}
```

Response Body Success :

```json
{
  "data": {
    "username": "adamsuseno",
    "name": "Adam Suseno"
  }
}
```

Response Body Error :

```json
{
  "errors": "name max length 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers:
- Authorization : token

Response Body Success

```json
{
  "data": {
    "username": "adamsuseno",
    "name": "Adam Suseno"
  }
}
```

Response Body Error

```json
{
  "errors": "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers:
- Authorization : token

Response Body Success:

```json
{
  "data": "OK"
}
```

Response Body Error:

```json
{
  "errors": "Unathorized"
}
```