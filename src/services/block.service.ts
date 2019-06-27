import { Injectable, forwardRef, Inject } from "@nestjs/common";
import { Block } from '@app/entity/block.entity';
import { InjectRepository, InjectEntityManager, InjectConnection } from "@nestjs/typeorm";
import { NotFoundException } from "@app/exceptions/notfound.exception";
import { Article } from '@app/entity/article.entity';
import { CommentService } from './comment.service';
import { CLASS_TYPE } from '@app/helpers/Enum';

@Injectable()
export class BlockService {
  constructor(@InjectRepository(Block) private repository,  
              @InjectEntityManager() private entityManager,
              @Inject(forwardRef(() => CommentService)) private commentService: CommentService) {}
 
 // 检查resumeBlock，没有就创建  返回block.id
 async resume() :Promise<Block>{
  let resume = await this.repository.findOne({ type: CLASS_TYPE.RESUME })
  if(!resume) {
    resume = await this.save({
      title: 'Resume placeholder',
      subTitle: 'Resume placeholder',
      type: CLASS_TYPE.RESUME,
      article: 'resume placeholde for comment'
    })
  }
  return resume
 }

  // 保存块 根据type关联不同的表
  async save(param) :Promise<number> {
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

    return await this.repository.save(block)
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

  async findAll({type, take, skip}) {
    let where = ''
    if(type != 0) { where = `WHERE type = ${type}` }

    // , (SELECT count(*) FROM comment WHERE comment.block_id = block.id) AS comment_count
    
    let sql = `SELECT block.*, (SELECT count(*) FROM comment WHERE comment.block_id = block.id) AS comment_count FROM block LEFT JOIN article ON block.id = article.block_id
                 ${where} ORDER BY article.updateTime DESC,block.creteTime DESC LIMIT ${take * skip}, ${take} `

                 
    // let sql = SELECT *, (SELECT count(*) FROM comment WHERE comment.block_id = block.id) AS comment_count FROM block
    //              ${where} ORDER BY creteTime DESC LIMIT ${take * skip}, ${take} 
    
    //  console.log(sql)
    return await this.entityManager.query(sql)    
  }

  // 通过ID使用键值对的形式更新一条记录
  async updateOneById(id, param) {
    if(param.article) {
      await this.updateArticleByBlockId(id, param.article)
      delete param.article
    }

    let querySelect = this.repository.createQueryBuilder()
    await querySelect.update(Block)
                .set(param)
                .where("block.id = :id", { id })
                .execute()
  }

  // 自增look
  async incrementLook(id) {
    this.entityManager.increment(Block, { id }, "look", 1)
  }

  // 自增like
  async incrementLike(id) {
    this.entityManager.increment(Block, { id }, "like", 1)
  }

  // 修改文章内容通过block_id
  async updateArticleByBlockId(id, content) {
    let querySelect = this.repository.createQueryBuilder()
    await querySelect.update(Article)
                .set({ content })
                .where("article.block_id = :id", { id })
                .execute()
  }

  // 通过关键字搜索块
  async searchByKeyWord(keyword) {
    let sql =  ` SELECT *, (SELECT count(*) FROM comment WHERE comment.block_id = block.id) AS comment_count FROM block WHERE title LIKE '%${keyword}%'`
    return await this.entityManager.query(sql)
  }
}

