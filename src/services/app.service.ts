import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { PRAISE_TYPE } from '@app/helpers/Enum';
import { Block } from '@app/entity/block.entity';
import { Comment } from '@app/entity/comment.entity';

@Injectable()
export class AppService {
  constructor(@InjectEntityManager() private entityManager) {}

  // 通过 PRAISE_TYPE 为不同的实体点赞
  async incrementPraise(body) {
    let entity = body.type === PRAISE_TYPE.BLOCk ? Block : Comment
    return await this.entityManager.increment(entity, { id: body.id }, "praise_number", 1)
  }

  async writeImageToDisk(image) {

  }
}