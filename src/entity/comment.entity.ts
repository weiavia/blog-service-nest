import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
import { Optional } from "@nestjs/common";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;
  
  // 暂时没有用户模块
  /* @Optional()
  @Column({ type: 'int', comment: '用户id'})
  uid: number; */

  @Column({ type: 'int', comment: '主题id' })
  theme_id: number;

  @Column({ type: 'int', comment: '所引用的评论的id', default: 0 })
  quote_id: number;
  
  @Column({ type: 'varchar', comment: '评论内容'})
  content: string;

  @Column({ type: 'varchar', comment: '名字'})
  name: string;

  @Column({ type: 'varchar', comment: '主页', default: ''})
  url: string
  
  @CreateDateColumn({comment: '创建时间'})
  creteTime: string
}