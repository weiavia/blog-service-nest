import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Timeline } from '@app/entity/timeline.entity';

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