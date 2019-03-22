import { Controller, Post, Param } from '@nestjs/common';
import { BlockService } from '@app/modules/block/block.service';
import { createBlockDto } from '@app/modules/block/block.dto';

@Controller('/api/v1/block')
export class BlockController {
  constructor(private service: BlockService) {}

  @Post()
  create(@Param() param: createBlockDto) {
    return this.service.save()
  }
}
