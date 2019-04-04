import { Controller, Post, Param, Body, Get, Query, Put } from '@nestjs/common';
import { CreateCommentDto, FindCommentDto } from '@app/dto/comment.dto';
import { CommentService } from '@app/services/comment.service';

@Controller('/api/v1/comments')
export class CommentController {
  constructor(private service: CommentService) {}

  @Get()
  comments(@Query() query: FindCommentDto) {
    return this.service.getListByBlockId(query)
  }

  @Post()
  create(@Body() body: CreateCommentDto) {
    return this.service.save(body)
  }

}
