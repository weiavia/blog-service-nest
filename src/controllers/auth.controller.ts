import { Controller, Body, Post, Get, Headers } from '@nestjs/common';
import { AuthService } from '@app/services/auth.service';
import { AuthException } from '@app/exceptions/auth.exception';

const SECRET = process.env.AUTH_SERCRET

@Controller('api/v1/auth')
export class AuthController {

  constructor(private service: AuthService) {}

  @Post()
  generateTokenBySecret(@Body('secret') secret) {
    if(secret != SECRET) {
      throw new AuthException()
    }
    return this.service.generateJwt(0)
  }

  @Get('check')
  async checkToken(@Headers('token') token) {
    return await this.service.checkJwt(token)
  }

} 