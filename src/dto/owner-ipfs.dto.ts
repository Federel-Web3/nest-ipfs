import { IsOptional } from 'class-validator';

export class OwnerIpfsDto {
  @IsOptional()
  tipoResponsavel: string;

  @IsOptional()
  codEntidade: string;

  @IsOptional()
  ocupante: string;

  @IsOptional()
  regime: string;
}
