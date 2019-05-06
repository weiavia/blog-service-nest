import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Timeline } from '@app/entity/timeline.entity';

// 文章内容表 跟block(主题表)是一对一关系
@Entity()
export class Photo {
    // 主键
    @PrimaryGeneratedColumn()
    id: number;

    // src 相对地址
    @Column('varchar', { length: 200 })
    src: string;

    // 所属主题ID
    @Column('int')
    theme_id: number
}