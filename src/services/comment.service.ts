import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comment } from '@app/entity/comment.entity';
import { COMMENT_PAGE_TAKE } from '@app/helpers/Enum';

@Injectable()
export class CommentService {
  constructor(@InjectRepository(Comment) private repository) {}

  async save(param): Promise<Comment> {
    return await this.repository.save(param)
  }

  // 通过块ID  降序  回复引用  分页
  async getListByBlockId({block_id, page_skip = 0, page_take = COMMENT_PAGE_TAKE}) {
    let data:any = {}

    data.comments =  await this.repository.find({
      where: { block_id },
      order: { id: 'DESC' },
      relations: ['quote_id'],
      skip: page_skip,
      take: page_take
    })

    data.count = await this.getCountByBlockId(block_id)
    return data
  }

  // 通过块ID查询数量
  async getCountByBlockId(block_id) :Promise<number> {
    return await this.repository.count({ block_id })
  }
}
