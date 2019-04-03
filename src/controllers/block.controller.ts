import { Controller, Post, Param, Body, Get, ParseIntPipe } from '@nestjs/common';
import { BlockService } from '@app/services/block.service';
import { CreateBlockDto } from '@app/dto/block.dto';

@Controller('/api/v1/blocks')
export class BlockController {
  constructor(private service: BlockService) {}

  @Post()
  create(@Body() body: CreateBlockDto) {
    return this.service.save(body)
  }

  @Get(':id')
  block(@Param('id', new ParseIntPipe()) id) {
    return this.service.findOneArticleById(id)
  }

  @Get()
  all() {
    return this.service.findAll()
  }
}
