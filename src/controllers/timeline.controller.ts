import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { TimelineService } from '@app/services/timeline.service';

@Controller('/api/v1/timeline')
export class TimelineController {
  constructor(private service: TimelineService) {}

  @Post()
  create(@Body() body) {
    return this.service.save(body)
  }

  @Get()
  list(@Query() query) {
    return this.service.findAll(query)
  }
}
