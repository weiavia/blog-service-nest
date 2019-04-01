import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comment } from '@app/entity/comment.entity'

@Injectable()
export class CommentService {
  constructor(@InjectRepository(Comment) private repository) {}

  async save(param): Promise<Comment> {
    let comment = await this.repository.save(param)
    return comment
  }

  // 获取主题ID下的所有评论
  async getByThemeId(theme_id) {
    let comments = await this.repository.find({
      where: [{ theme_id }]
    })
    return comments
  }
}