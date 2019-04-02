import { IsString, IsInt, Length, IsUrl, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { ARTICLE, MUSIC, VIDEO } from '@app/helpers/Enum';

export class createBlockDto {
  @IsString()
  @Length(1, 20)
  title: string;

  @IsString()
  @Length(1, 30)
  subTitle:string;

  // 可选的，字符串 长度1 -> 
  @IsOptional()
  @Length(1)
  @IsString()
  article:string

  @IsOptional()
  @IsUrl()
  url:string

  @IsOptional()
  @IsUrl()
  thumb:string

  @IsEnum([ARTICLE, MUSIC, VIDEO])
  type:number
}