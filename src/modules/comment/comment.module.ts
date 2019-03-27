import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from '@app/entity/comment.entity';
import { CommentService } from '@app/modules/comment/comment.service';
import { CommentController } from '@app/modules/comment/comment.controller';

@Module({
  controllers: [CommentController],
  providers: [CommentService],
  imports: [TypeOrmModule.forFeature([Comment])]
})
export class CommentModule {}
