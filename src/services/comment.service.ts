import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { InjectRepository, InjectEntityManager } from "@nestjs/typeorm";
import { Comment } from '@app/entity/comment.entity';
import { COMMENT_PAGE_TAKE } from '@app/helpers/Enum';
import { BlockService } from '@app/services/block.service';

@Injectable()
export class CommentService {
  constructor(@InjectRepository(Comment) private repository,
              @InjectEntityManager() private entityManager, 
              @Inject(forwardRef(() => BlockService)) private blockService: BlockService) {}

  // 保存评论，通过count保存楼层字段
  async save(param): Promise<Comment> {
    if(param.isResume) {
      let resume = await this.blockService.resume()
      param.block_id = resume.id
    } 
    let count = await this.getCountByBlockId(param.block_id)
    param.floor = ++ count
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

  // 通过块ID查询总数
  async getCountByBlockId(block_id) :Promise<number> {
    return await this.repository.count({ block_id })
  }

  // 增加一点赞数
  async incrementPraise(comment_id) {
    return await this.entityManager.increment(Comment, { id: comment_id }, "praise_number", 1)
  }
}
