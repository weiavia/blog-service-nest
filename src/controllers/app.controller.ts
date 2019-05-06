import { Controller, Get, Body, BadGatewayException, UseInterceptors, Logger, Post, Put, ParseIntPipe, FilesInterceptor, UploadedFile, UploadedFiles } from '@nestjs/common';
import { AppService } from '@app/services/app.service';
import { CommentService } from '@app/services/comment.service';
import { BlockService } from '@app/services/block.service';
import { PraiseDto } from '@app/dto/base.dto';
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
  @UseInterceptors(FilesInterceptor('file[]', 10, { storage: diskStorage }))
  uploadFile(@UploadedFiles() files) {
    let data = []
    files.forEach(file => {
      data.push(`images/${file.filename}`)
    });
    return data
  }
}