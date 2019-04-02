import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { Optional } from "@nestjs/common";
import { Block } from './block.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;
  
  // 暂时没有用户模块 
  /* @Optional()
  @Column({ type: 'int', comment: '用户id'})
  uid: number; */


  // @Column({ type: 'int', comment: '主题id' })
  @JoinColumn({ name: "theme_id" })
  @ManyToOne(type => Block)
  theme_id: number;

  // 所引用的评论的id
  @JoinColumn({'name': 'quote_id'})
  @OneToOne(type => Comment, comment => comment.quote)
  quote_id: number

  @OneToOne(type => Comment, comment => comment.quote_id)
  quote: Comment
  
  @Column({ type: 'varchar', comment: '评论内容'})
  content: string;

  @Column({ type: 'varchar', comment: '名字'})
  name: string;


  @Column({ type: 'varchar', comment: '主页', default: ''})
  url: string
  
  @CreateDateColumn({comment: '创建时间'})
  creteTime: string

}