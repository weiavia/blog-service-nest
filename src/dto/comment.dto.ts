import { IsString, IsNumber, IsOptional, IsUrl, Max, Length, IsInt, IsIn, IsNumberString, IsBoolean } from 'class-validator';
import { IsIntString } from '@app/dto/custom.validate';
import { Optional } from '@nestjs/common';
import { isBoolean } from 'util';

export class CreateCommentDto {
  @IsOptional()
  @IsNumber()
  uid: number;

  @IsNumber()
  block_id: number;

  @IsOptional()
  @IsNumber()
  quote_id: number;

  @IsOptional()
  @IsUrl()
  url: string;

  @IsString()
  @Length(2, 200)
  content: string;

  @Length(1, 6)
  @IsString()
  name: string;

  @Optional()
  @IsBoolean()
  isResume: boolean
}

export class FindCommentDto {
  @IsOptional()
  @IsIntString()
  page_skip: number

  @IsOptional()
  @IsIntString()
  page_take: number

  @IsIntString()
  block_id: number
}

export class DeleteCommentDto {

}