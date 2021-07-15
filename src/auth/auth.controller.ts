import { Controller, Get, Query } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthTypes } from 'src/common/enums';
import { AuthResponseDTO } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/register')
  register(@Query('code') code: string): Promise<AuthResponseDTO> {
    return this.authService.handleAuth(code, AuthTypes.REGISTER);
  }

  @Get('/login')
  login(@Query('code') code: string): Promise<AuthResponseDTO> {
    return this.authService.handleAuth(code, AuthTypes.LOGIN);
  }
}
