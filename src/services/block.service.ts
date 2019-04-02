import { Injectable } from "@nestjs/common";
import { Block } from '@app/entity/block.entity';
import { InjectRepository, InjectEntityManager } from "@nestjs/typeorm";
import { NotFoundException } from "@app/exceptions/notfound.exception";
import { Article } from '@app/entity/article.entity';
import { CommentService } from './comment.service';

@Injectable()
export class BlockService {
  constructor(@InjectRepository(Block) private repository, private commentService: CommentService) {}

  /* 
    根据类型保存块
    return boolean
  */
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

  /* 
    查询文章的详细内容包括评论列表
    @return  { article, omments, ... } 
  */
  async findOneArticleById(id:number) {
    let article = await this.repository.findOne(id, { relations: ['article'] })
    
    if(!article) {
      throw new NotFoundException({})
    }

    let comments = await this.commentService.getByThemeId(id)
    article.comments = comments

    return article
  }

  async findAll() {
    let result = await this.repository.find()
    return result
  }
}