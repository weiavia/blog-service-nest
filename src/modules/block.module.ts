import { Module } from '@nestjs/common';
import { BlockController } from '@app/controllers/block.controller';
import { BlockService } from '@app/services/block.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Block } from '@app/entity/block.entity';

@Module({
  controllers: [BlockController],
  providers: [BlockService],
  imports: [TypeOrmModule.forFeature([Block])]
})
export class BlockModule {}
