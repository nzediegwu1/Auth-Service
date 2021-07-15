require('dotenv').config();

const config = Object.freeze({
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  LOGIN_REDIRECT_URL: process.env.LOGIN_REDIRECT_URL,
  REGISTER_REDIRECT_URL: process.env.REGISTER_REDIRECT_URL,
});

export default config;
