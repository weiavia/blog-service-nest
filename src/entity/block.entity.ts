import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, OneToOne} from "typeorm";
import { Comment } from '@app/entity/comment.entity'
import { Article } from '@app/entity/article.entity';

@Entity()
export class Block {

    @PrimaryGeneratedColumn()
    id: number;

    // 标题
    @Column('varchar', {length: 20})
    title: string; 

    // 副标题
    @Column('varchar', { length: 200, nullable: true })
    subTitle: string;

    // 类型
    @Column('tinyint')
    type: number

    // like number
    @Column('tinyint', { nullable: true, default: 0 })
    like: number

    // look number
    @Column('tinyint', { nullable: true, default: 0 })
    look: number

    // url
    @Column('varchar', { nullable: true })
    url: string

    // 创建时间
    @CreateDateColumn()
    creteTime: string

    // 更新时间
    @UpdateDateColumn()
    updateTime: string

    // 与文章的一对一关系
    @OneToOne(type => Article, article => article.block, {
        cascade: true
    })
    article: Article;

    // 点赞数
    @Column({ type: 'int', default: 0, comment: '块的点赞数量'})
    praise_number: number

    // 与评论表的一对多关系
    @OneToMany(type => Comment, comment => comment.block_id)
    comments: Comment[]
}