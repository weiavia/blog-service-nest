import { IsString, IsNumber, IsOptional } from 'class-validator';

export class createCommentDto {
  
  @IsOptional()
  @IsNumber()
  uid: number;

  @IsNumber()
  theme_id: number;

  @IsOptional()
  @IsNumber()
  quote_id: number;

  @IsString()
  content: string;
}