import { Injectable } from "@nestjs/common";
import { Block } from '@app/entity/block.entity';
import { InjectRepository, InjectEntityManager } from "@nestjs/typeorm";
import { NotFoundException } from "@app/exceptions/notfound.exception";
import { Article } from '@app/entity/article.entity';

@Injectable()
export class BlockService {
  constructor(@InjectRepository(Block) private repository, @InjectEntityManager() private enitityManager) {}

  /* 
    保存block
    return boolean
  */
  async save(param) :Promise<boolean> {
    const block = new Block()
    block.subTitle = param.subTitle
    block.type = param.type
    block.title = param.title

    // 保存文章内容
    if(param.article) {
      const article = new Article()
      article.content = param.article
      block.article = article
    }

    let result = await this.repository.save(block)
    if(result) {
      return true
    }
  }

  /* 
    根据Id查找文章详情（带有article comments）
  */
  async findOneArticleById(id:number) {
    let result = await this.repository.findOne(id, { relations: ['comments', 'article'] })
    if(!result) {
      throw new NotFoundException({})
    }
    return result
  }

  async findAll() {
    let result = await this.repository.find()
    return result
  }
}