import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimelineController } from '@app/controllers/timeline.controller';
import { TimelineService } from '@app/services/timeline.service';
import { Timeline } from '@app/entity/timeline.entity';

@Module({
  controllers: [TimelineController],
  providers: [TimelineService],
  imports: [TypeOrmModule.forFeature([Timeline])],
  exports: [TimelineService]
})
export class TimelineModule {}
