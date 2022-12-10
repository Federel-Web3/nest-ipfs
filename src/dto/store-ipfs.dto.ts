import {
  IsArray,
  IsDate,
  IsIn,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { UFs } from 'src/types/uf';

import { Type } from 'class-transformer';
import { OwnerIpfsDto } from './owner-ipfs.dto';
export class StoreIpfsDto {
  @IsOptional()
  classe: string;

  @IsOptional()
  rip: string;

  @IsOptional()
  idUtilizacao: string;

  @IsOptional()
  @IsDate()
  dataRegistro: Date;

  @IsOptional()
  @IsIn(UFs)
  UF: string;

  @IsOptional()
  municipio: string;

  @IsOptional()
  endereco: string;

  @IsOptional()
  bairro: string;

  @IsOptional()
  conceituacao: string;

  @IsOptional()
  // @IsIn(["AÇUDE", "TERRENO", ""])
  tipo_imovel: string;

  @IsOptional()
  regime_utilizacao: string;

  @IsOptional()
  proprietario_oficial: string;

  @IsOptional()
  @IsDate()
  dataInicio: Date;

  @IsOptional()
  area_terreno: string;

  @IsOptional()
  area_uniao: string;

  @IsOptional()
  lote: string;

  @IsOptional()
  quadra: string;
  //Qualificação do proprietário atual (nome, CPF, RG, estado civil etc.);

  @IsOptional()
  @IsArray()
  inventarios: string[];

  @IsOptional()
  @IsArray()
  acoes_judiciais: string[];

  @IsOptional()
  @IsArray()
  compras_e_vendas: string[];

  //array de hashes do ipfs
  @IsOptional()
  @IsArray()
  alteracoes: string[];

  // hash de ipfs
  @IsOptional()
  document: string;

  @Type(() => OwnerIpfsDto)
  @ValidateNested()
  proprietario: OwnerIpfsDto;
}

// A matrícula do imóvel é constituída pelas seguintes informações:

// - Localização;
// - Dimensão;
// - Lote e quadra;
// - Qualificação do proprietário atual (nome, CPF, RG, estado civil etc.);
// - Datas dos registros e averbações;
// - Inventários;
// - Ações judiciais;
// - Compras e vendas;
// - Alterações pelas quais o imóvel passou (cada ato jurídico relacionado a ele deve ser averbado na matrícula).
