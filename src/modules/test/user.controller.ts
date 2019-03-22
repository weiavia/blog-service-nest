import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { UserService } from '@app/modules/user/user.service';
import { RegisterDto } from '@app/modules/user/user.validation';

@Controller('user')
export class UserController {
  constructor (private service: UserService) {}

  @Get()
  allUser() {
    return this.service.findAll()
  }

  @Post()
  register(@Body() user: RegisterDto) {
    return user
  }
}
