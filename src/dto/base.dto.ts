import { IsIntString } from '@app/dto/custom.validate';

export class PraiseDto {
  @IsIntString()
  id: number;

  @IsIntString()
  type: number;
}