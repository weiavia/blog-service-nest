import { Module } from '@nestjs/common';
import { BlockController } from '@app/modules/block/block.controller';
import { BlockService } from '@app/modules/block/block.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Block } from '@app/modules/block/block.entity';

@Module({
  controllers: [BlockController],
  providers: [BlockService],
  imports: [TypeOrmModule.forFeature([Block])]
})
export class BlockModule {}
