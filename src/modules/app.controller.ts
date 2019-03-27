import { Controller, Get, Body, BadGatewayException, UseInterceptors, Logger, Post } from '@nestjs/common';
import { AppService } from '@app/modules/app.service';
import { ParamException } from '@app/exceptions/param.exception';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @Post()
  praise(@Body('name') param): any {

  }

}