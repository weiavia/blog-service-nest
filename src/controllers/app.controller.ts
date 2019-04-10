import { Controller, Get, Body, BadGatewayException, UseInterceptors, Logger, Post, Put, ParseIntPipe, FileInterceptor, UploadedFile, MulterModule } from '@nestjs/common';
import { AppService } from '@app/services/app.service';
import { CommentService } from '@app/services/comment.service';
import { BlockService } from '@app/services/block.service';
import { PraiseDto } from '@app/dto/base.dto';
import { PRAISE_TYPE } from '@app/helpers/Enum';
import { diskStorage } from '@app/helpers/multer.storage';

@Controller()
export class AppController {
  constructor(private readonly service: AppService, 
              private readonly commentService: CommentService,
              private readonly blockService: BlockService) {}

  @Put('/api/v1/praise')
  praise(@Body() body: PraiseDto) {
    this.service.incrementPraise(body)
  }

  @Post('/api/v1/file')
  @UseInterceptors(FileInterceptor('file', { storage: diskStorage }))
  uploadFile(@UploadedFile() file) {
    // 外网IP跟端口号
    return `http://127.0.0.1:3001/static/images/${file.filename}`
  }
}