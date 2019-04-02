import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comment } from '@app/entity/comment.entity'

@Injectable()
export class CommentService {
  constructor(@InjectRepository(Comment) private repository) {}

  async save(param): Promise<Comment> {
    let comment = new Comment()
    comment.name = param.name
    comment.quote = param.quote_id
    comment.theme_id = param.theme_id
    comment.content = param.content
    
    let result  = await this.repository.save(comment)
    return comment
  }

  // 获取block下的所有评论
  async getByThemeId(theme_id) {
    let comments = await this.repository.find({relations: ['quote']})
    return comments
  }
}