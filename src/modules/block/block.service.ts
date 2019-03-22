import { Injectable } from "@nestjs/common";
import { Block } from '@app/modules/block/block.entity';
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class BlockService {
  constructor(@InjectRepository(Block) private repository) {}

  async save() :Promise<boolean> {
    let result = await this.repository.save()
    if(result) {
      return true
    }
  }
}