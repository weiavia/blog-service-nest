import { IsString, IsNumber, IsOptional, IsUrl, Max, Length } from 'class-validator';

export class createCommentDto {
  
  @IsOptional()
  @IsNumber()
  uid: number;

  @IsNumber()
  theme_id: number;

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
  name: String;
}

export class getCommentsDto {
  @IsNumber()
  theme_id: number;
}