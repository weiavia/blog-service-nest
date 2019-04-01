import { Injectable } from "@nestjs/common";
import { Block } from '@app/entity/block.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { NotFoundException } from "@app/exceptions/notfound.exception";

@Injectable()
export class BlockService {
  constructor(@InjectRepository(Block) private repository) {}

  async save(param) :Promise<boolean> {
    let result = await this.repository.save(param)
    if(result) {
      return true
    }
  }

  async findOneById(id) {
    let result = await this.repository.findOne(id, { relations: ['comments'] })
    console.log(result)
    if(!result) {
      throw new NotFoundException({})
    }
    return result
  }
}