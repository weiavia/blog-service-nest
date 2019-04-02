import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from '@app/entity/comment.entity';
import { CommentService } from '@app/services/comment.service';
import { CommentController } from '@app/controllers/comment.controller';

@Module({
  controllers: [CommentController],
  providers: [CommentService],
  imports: [TypeOrmModule.forFeature([Comment])],
  exports: [CommentService]
})
export class CommentModule {}
