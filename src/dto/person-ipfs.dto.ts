import { IsOptional } from 'class-validator';

export class PersonIpfsDto {
  @IsOptional()
  codEntidade: string;

  @IsOptional()
  ocupante: string;

  @IsOptional()
  regime: string;
}
