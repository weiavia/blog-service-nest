import { Injectable } from "@nestjs/common";
import { InjectRepository, InjectConnection, InjectEntityManager } from "@nestjs/typeorm";
import { Timeline } from '@app/entity/timeline.entity';
import { Photo } from '@app/entity/photo.entity';

@Injectable()
export class TimelineService {
  constructor(@InjectRepository(Timeline) private repository,
              @InjectConnection() private connect,
              @InjectEntityManager() private entityManager,
              ) {}

  async save(param) {
    let timeline = await this.repository.save(param)

    if(param.photos) {
      param.photos.forEach( src => {
        let photo = new Photo()
            photo.src = src
            photo.theme_id = timeline.id
            this.connect.manager.save(photo)
      });
    }
    
    return timeline 
  }

  /**
   * 如果有传入date字段查询时间大于date的内容
   * 每一次查询15条数据，page为页数
   * **/ 
  async findAll({date, page = 0}) {
    let sql =  `SELECT * FROM timeline`
    if(date) {
      sql += ` WHERE unix_timestamp(creteTime) < ${date}`
    }
    sql += ` LIMIT ${page * 15}, 15`
    
    return await this.entityManager.query(sql)
  }
}
