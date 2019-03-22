import { Controller, Body, Post, Get } from '@nestjs/common';
import { AuthService } from '@app/modules/auth/auth.service';

@Controller('auth')
export class AuthController {

  constructor(private service: AuthService) {}

  @Post()
  generateTokenByPassword(@Body('id') id) {
    return this.service.generateJwt(id)
  }

  @Get('check')
  async checkToken(@Body('token') token) {
    let result = await this.service.checkJwt(token)
    return result
  }

} 