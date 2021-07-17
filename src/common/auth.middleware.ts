import { NestMiddleware } from '@nestjs/common';
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import config from '../config/environment.config';

export class AuthenticationMiddleware implements NestMiddleware {
  use(req, res, next) {
    jwt({
      secret: expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${config.AUTH0_DOMAIN}/.well-known/jwks.json`,
      }),

      audience: config.BASE_URL,
      issuer: `${config.AUTH0_DOMAIN}/`,
      algorithms: ['RS256'],
    })(req, res, (err) => {
      if (err) {
        const status = err.status || 500;
        const message =
          err.message || 'Sorry, we were unable to process your request.';
        return res.status(status).json({ message });
      }
      next();
    });
  }
}
