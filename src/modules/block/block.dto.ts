import { IsString, IsInt, Length, IsUrl, IsEnum, IsOptional } from 'class-validator';
import { ARTICLE, MUSIC, VIDEO } from '@app/helpers/Enum';

export class createBlockDto {
  
  @IsString()
  @Length(1, 20)
  title: string;

  @IsString()
  @Length(1, 30)
  subTitle:string;

  @Length(1)
  content:string

  @IsOptional()
  @IsUrl()
  url:string

  @IsOptional()
  @IsUrl()
  thumb:string

  @IsEnum([ARTICLE, MUSIC, VIDEO])
  type:number
}