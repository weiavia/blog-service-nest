import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, OneToOne, OneToMany } from "typeorm";
import { Block } from './block.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  // 评论跟块的多对一关系
  @ManyToOne(type => Block)
  @JoinColumn({ name: "block_id" })
  block_id: number;

  // 被引用的评论跟评论的多对一关系
  @ManyToOne(type => Comment)
  @JoinColumn({name: "quote_id" })
  quote_id: number;

  // 评论状态
  @Column({ type: 'int', default: 1,comment: '评论状态: 1审核中 2通过审核'})
  status: number;

  // 点赞数
  @Column({ type: 'int', default: 0, comment: '评论的点赞数量'})
  praise_number: number

  @Column({ type: 'varchar', comment: '评论内容'})
  content: string;

  @Column({ type: 'varchar', comment: '名字'})
  name: string;

  @Column({ type: 'varchar', comment: '主页', default: ''})
  url: string;

  @Column({ type: 'int', comment: '所在楼', default: 0})
  floor: number;
  
  @CreateDateColumn({comment: '创建时间'})
  creteTime: string;
}