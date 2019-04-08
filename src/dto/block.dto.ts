import { IsString, IsInt, Length, IsUrl, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { ARTICLE, MUSIC, VIDEO, CLASS_TYPE } from '@app/helpers/Enum';
import { IsIntString } from '@app/dto/custom.validate';

export class CreateBlockDto {
  @IsString()
  @Length(1, 20)
  title: string;

  @IsString()
  @Length(1, 30)
  subTitle:string;

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

  @IsEnum(CLASS_TYPE)
  type:number
}

export class UpdateBlockDto {
  @IsOptional()
  @IsString()
  @Length(1, 20)
  title: string;

  @IsOptional()
  @IsString()
  @Length(1, 30)
  subTitle:string;

  @IsOptional()
  @Length(1)
  @IsString()
  article:string;

  @IsOptional()
  @IsUrl()
  url:string;

  @IsOptional()
  @IsUrl()
  thumb:string;

  @IsOptional()
  @IsEnum([ARTICLE, MUSIC, VIDEO])
  type:number;

  @IsOptional()
  @IsIntString()
  look:number;

  @IsOptional()
  @IsIntString()
  updateType:number;
}

export const UpdateBlockKeys = [
  'title',
  'subTitle',
  'article',
  'url',
  'thumb',
  'type',
  'look',
  'updateType'
]