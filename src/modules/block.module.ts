import { Module } from '@nestjs/common';
import { BlockController } from '@app/controllers/block.controller';
import { BlockService } from '@app/services/block.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Block } from '@app/entity/block.entity';
import { CommentModule } from './comment.module';

@Module({
  controllers: [BlockController],
  providers: [BlockService],
  imports: [TypeOrmModule.forFeature([Block]), CommentModule]
})
export class BlockModule {}
