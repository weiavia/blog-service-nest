import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from '@app/entity/comment.entity';
import { CommentService } from '@app/services/comment.service';
import { CommentController } from '@app/controllers/comment.controller';
import { BlockModule } from '@app/modules/block.module';

@Module({
  controllers: [CommentController],
  providers: [CommentService],
  imports: [TypeOrmModule.forFeature([Comment]), forwardRef(() => BlockModule)],
  exports: [CommentService]
})
export class CommentModule {}
