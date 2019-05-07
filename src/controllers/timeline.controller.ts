import { Controller, Post, Body, Get, Query, UseGuards } from '@nestjs/common';
import { TimelineService } from '@app/services/timeline.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('/api/v1/timeline')
export class TimelineController {
  constructor(private service: TimelineService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() body) {
    return this.service.save(body)
  }

  @Get()
  list(@Query() query) {
    return this.service.findAll(query)
  }
}
