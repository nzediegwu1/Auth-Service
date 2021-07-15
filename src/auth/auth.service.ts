import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AuthTypes } from 'src/common/enums';
import { capitalize } from 'src/common/util';

import config from 'src/config/environment.config';

const redirectUrls = {
  LOGIN: config.LOGIN_REDIRECT_URL,
  REGISTER: config.REGISTER_REDIRECT_URL,
};

@Injectable()
export class AuthService {
  async handleAuth(code: string, type: AuthTypes) {
    const {
      data: { access_token, token_type },
    } = await axios.post(`${config.AUTH0_DOMAIN}/oauth/token`, {
      grant_type: 'authorization_code',
      client_id: config.AUTH0_CLIENT_ID,
      client_secret: config.AUTH0_CLIENT_SECRET,
      code,
      redirect_uri: redirectUrls[type],
    });

    return {
      message: `${capitalize(type)} Successful`,
      data: { accessToken: access_token, tokenType: token_type },
    };
  }
}
