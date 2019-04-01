import { Controller, Post, Param, Body, Get, Query } from '@nestjs/common';
import { createCommentDto, getCommentsDto } from '@app/modules/comment/comment.dto';
import { CommentService } from '@app/modules/comment/comment.service';

@Controller('/api/v1/comment')
export class CommentController {
  constructor(private service: CommentService) {}

  @Get()
  comments(@Query() query: getCommentsDto) {
    return this.service.getByThemeId(query)
  }

  @Post()
  create(@Body() body: createCommentDto) {
    return this.service.save(body)
  }
}
