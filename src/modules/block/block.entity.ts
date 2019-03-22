import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

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
    @Column('tinyint', { nullable: true })
    like: number

    // look number
    @Column('tinyint', { nullable: true })
    look: number

    @Column('varchar')
    url: string

    // 创建时间
    @CreateDateColumn()
    creteTime: string

    // 更新时间
    @UpdateDateColumn()
    updateTime: string

}
