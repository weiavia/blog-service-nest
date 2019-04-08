import { Injectable } from "@nestjs/common";
import { Block } from '@app/entity/block.entity';
import { InjectRepository, InjectEntityManager } from "@nestjs/typeorm";
import { NotFoundException } from "@app/exceptions/notfound.exception";
import { Article } from '@app/entity/article.entity';
import { CommentService } from './comment.service';

@Injectable()
export class BlockService {
  constructor(@InjectRepository(Block) private repository,  @InjectEntityManager() private entityManager, private commentService: CommentService) {}
 
  // 保存块 根据type关联不同的表
  async save(param) :Promise<boolean> {
    const block = new Block()
    // 保存块的基本信息
    block.subTitle = param.subTitle
    block.type = param.type
    block.title = param.title

    // 保存文章内容
    if(param.article) {
      const article = new Article()
      article.content = param.article
      block.article = article
    }

    await this.repository.save(block)
    return true
  }

  // 文章 -> 文章内容 -> 评论列表
  async findOneArticleById(id:number) {
    let article = await this.repository.findOne(id, { relations: ['article'] })
    if(!article) {
      throw new NotFoundException({})
    }
    let comment = await this.commentService.getListByBlockId({block_id: id})
    article.comment = comment

    return article
  }

  async findAll() {
    let sql =  ` SELECT *, (SELECT count(*) FROM comment WHERE comment.block_id = block.id) AS comment_count FROM block`
    return await this.entityManager.query(sql)    
  }
}