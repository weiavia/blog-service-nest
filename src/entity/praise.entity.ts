import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Praise {
  @PrimaryGeneratedColumn()
  id: number;
  
}