import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { Photo } from '@app/entity/photo.entity';

@Entity()
export class Timeline {
    @PrimaryGeneratedColumn()
    id: number;

    // 内容
    @Column('varchar', { length: 360 })
    content: string

    // 地址
    @Column('varchar', { length: 20 })
    address: string

    // 天气
    @Column('varchar', { length: 50 })
    weather: string

    // 创建时间
    @CreateDateColumn()
    creteTime: string
}
