import { IsString, IsInt, Length, IsUrl, IsEnum } from 'class-validator';
import { ARTICLE, MUSIC, VIDEO } from '@app/helpers/Enum';

export class createBlockDto {
  
  @IsString()
  @Length(1, 20)
  title: string;

  @IsInt()
  @Length(1, 30)
  subTitle:string;

  @Length(1)
  content:string

  @IsUrl()
  url:string

  @IsUrl()
  thumb:string

  @IsEnum([ARTICLE, MUSIC, VIDEO])
  type:number
}