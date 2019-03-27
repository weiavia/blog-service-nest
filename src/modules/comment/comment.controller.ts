import { Controller, Post, Param, Body, Get, Query } from '@nestjs/common';
import { createCommentDto } from '@app/modules/comment/comment.dto';
import { CommentService } from '@app/modules/comment/comment.service';

@Controller('/api/v1/comment')
export class CommentController {
  constructor(private service: CommentService) {}

  @Get()
  one() {
    return 'get one'
  }

  @Post()
  create(@Body() body: createCommentDto) {
    
  }
}
