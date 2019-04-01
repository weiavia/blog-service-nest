import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn} from "typeorm";
import { Comment } from '@app/entity/comment.entity'

@Entity()
export class Block {

    @PrimaryGeneratedColumn()
    id: number;

    // 标题
    @Column('varchar', {length: 20})
    title: string; 

    // 副标题
    @Column('varchar', { length: 30, nullable: true })
    subTitle: string;

    // 内容
    @Column('text')
    content: string;

    // 类型
    @Column('tinyint')
    type: number

    // like number
    @Column('tinyint', { nullable: true, default: 0 })
    like: number

    // look number
    @Column('tinyint', { nullable: true, default: 0 })
    look: number

    @Column('varchar', { nullable: true })
    url: string

    // 创建时间
    @CreateDateColumn()
    creteTime: string

    // 更新时间
    @UpdateDateColumn()
    updateTime: string

    // 与评论表的一对关系
    @OneToMany(type => Comment, comment => comment.theme_id)
    comments: Comment[]
}
