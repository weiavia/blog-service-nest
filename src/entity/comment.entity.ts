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

  @Column({ type: 'int', comment: '引用评论的id', default: 0 })
  quote_id: number;
  
  @Column({ type: 'varchar', comment: '评论内容'})
  content: string;

  @Column({ type: 'varchar', comment: '联系方式 QQ / EMAIL'})
  concat: string;
  
  @CreateDateColumn({comment: '创建时间'})
  creteTime: string
}