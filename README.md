# Auth Service


<p align="left">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> service which provides user signup, login, and profile management</p>


## Tools

- [Nest](https://github.com/nestjs/nest) - A framework for building efficient and scalable Node.js applications.
- [Auth0](https://auth0.com) - For secure authentication and authorization
- [JWT](https://jwt.io/) - For stateless management of user tokens
- [Swagger](https://swagger.io/) - For API documentation

## Installation

```bash
$ yarn install
```

## Setup
1. Copy environment variables from `.env.sample` file in project root into a new `.env` file in project root
2. Fill the environment variables with actual values


## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Usage
1. To login, go to the following web address (Replace env variables with actual values):
```bash
https://${AUTH0_DOMAIN}/authorize?audience=http://localhost:3000&scope=openid%20profile&response_type=code&client_id=${AUTH0_CLIENT_ID}&redirect_uri=${LOGIN_REDIRECT_URL}&state=STATE?prompt=none
```
2. To register, go to the following web address (Replace env variables with actual values):
```bash
https://${AUTH0_DOMAIN}/authorize?audience=http://localhost:3000&scope=openid%20profile&response_type=code&client_id=${AUTH0_CLIENT_ID}&redirect_uri=${REGISTER_REDIRECT_URL}}&state=STATE?prompt=none
```
3. After login or register, copy the `auth_token` in your response body and set as bearer token in your request header

5. With `access_token` set, you now access the following protected endpoints:
```
GET /api/me
POST /api/upload
```

6. To logout current user: go to the following web address (Replace env variables with actual values):
```bash
https://${AUTH0_DOMAIN}/v2/logout?federated
```

## API Documentation
- Goto [here](http://localhost:3000/docs)

## Try it out
1. Complete the above steps to install and setup the project locally
2. Start the app
3. Click [Here](https://anaeze-auth-service.us.auth0.com/authorize?audience=http://localhost:3000&scope=openid%20profile&response_type=code&client_id=m86OgSLOaWlNyImrqlz0h8eVD5sD79To&redirect_uri=http://localhost:3000/auth/register&state=STATE?prompt=none) to register
4. Copy your `auth_token`, set as `Bearer` token in your headers and tryout other endpoints in the [docs](http://localhost:3000/docs)

## Suggested Improvements
1. Write unit and e2e tests
2. Upload profile images to cloud and save image url to a database