import { Controller, Post, Param, Body, Get, ParseIntPipe, Put, UsePipes, Query } from '@nestjs/common';
import { BlockService } from '@app/services/block.service';
import { CreateBlockDto, UpdateBlockDto, UpdateBlockKeys, HomeListDto } from '@app/dto/block.dto';
import { FieldFilterPipe } from '@app/helpers/fieldFilter.pipe';

const LOOK_ADD = 1
const LIKE_ADD = 2

@Controller('/api/v1/blocks')
export class BlockController {
  constructor(private service: BlockService) {}

  @Post()
  createOne(@Body() body: CreateBlockDto) {
    return this.service.save(body)
  }

  @Get(':id')
  getOne(@Param('id', new ParseIntPipe()) id) {
    return this.service.findOneArticleById(id)
  }
  
  @Put(':id')
  @UsePipes(new FieldFilterPipe(UpdateBlockKeys))
  updateOne(@Param('id', new ParseIntPipe()) id, @Body() body: UpdateBlockDto) {
    // TODO 验证block是否属于当前用户
    if(body.updateType == LOOK_ADD) {
      this.service.incrementLook(id)
    } else if(body.updateType == LIKE_ADD) {
      this.service.incrementLike(id)
    } else {
      return this.service.updateOneById(id, body)
    }
  }

  @Get()
  homeList(@Query() query: HomeListDto) {
    return this.service.findAll(query)
  }
}
