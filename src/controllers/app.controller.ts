import { Controller, Get, Body, BadGatewayException, UseInterceptors, Logger, Post, Put, ParseIntPipe } from '@nestjs/common';
import { AppService } from '@app/services/app.service';
import { CommentService } from '@app/services/comment.service';
import { BlockService } from '@app/services/block.service';
import { PraiseDto } from '@app/dto/base.dto';
import { PRAISE_TYPE } from '@app/helpers/Enum';

@Controller()
export class AppController {
  constructor(private readonly service: AppService, 
              private readonly commentService: CommentService,
              private readonly blockService: BlockService) {}

  @Put('/api/v1/praise')
  praise(@Body() body: PraiseDto) {
    this.service.incrementPraise(body)
  }
}