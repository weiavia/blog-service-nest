import { IsString, IsInt } from 'class-validator';

export class RegisterDto {
  
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;
}