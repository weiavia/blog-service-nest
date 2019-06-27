import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, UpdateDateColumn } from "typeorm";
import { Block } from '@app/entity/block.entity';

// 文章内容表 跟block(主题表)是一对一关系
@Entity()
export class Article {
    // 主键
    @PrimaryGeneratedColumn()
    id: number;

    // 内容
    @Column('text')
    content: string;

    // 更新时间
    @UpdateDateColumn()
    updateTime: string

    // block_id
    @OneToOne(type => Block, block => block.article)
    @JoinColumn({name: 'block_id'})
    block: Block;
}