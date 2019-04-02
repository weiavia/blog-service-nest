import { Controller, Post, Param, Body, Get, Query } from '@nestjs/common';
import { createCommentDto, getCommentsDto } from '@app/dto/comment.dto';
import { CommentService } from '@app/services/comment.service';

@Controller('/api/v1/comment')
export class CommentController {
  constructor(private service: CommentService) {}

  @Get()
  comments(@Query() query) {
    return this.service.getByThemeId(query)
  }

  @Post()
  create(@Body() body: createCommentDto) {
    return this.service.save(body)
  }
}
