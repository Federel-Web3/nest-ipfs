import { IsArray, IsDate, IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { UFs } from 'src/types/uf';
import { isInt8Array } from 'util/types';

export class StoreIpfsDto {
  @IsOptional()
  @IsIn(['DOMINIAL', 'USO_ESPECIAL', 'IMOVEL FUNCIONAL'])
  classe: string;

  @IsOptional()
  rip: string;

  @IsNotEmpty()
  idUtilizacao: string;

  @IsNotEmpty()
  @IsIn(UFs)
  UF: string;

  @IsNotEmpty()
  municipio: string;

  @IsOptional()
  endereco: string;

  @IsOptional()
  bairro: string;

  @IsNotEmpty()
  conceituacao: string;

  @IsNotEmpty()
  // @IsIn(["AÇUDE", "TERRENO", ""])
  tipo_imovel: string;

  @IsNotEmpty()
  regime_utilizacao: string;

  @IsOptional()
  proprietario_oficial: string;

  @IsNotEmpty()
  @IsDate()
  dataInicio: Date;

  @IsNotEmpty()
  dimensao: string;

  @IsNotEmpty()
  lote: string;

  @IsNotEmpty()
  quadra: string;
  //Qualificação do proprietário atual (nome, CPF, RG, estado civil etc.);
  @IsNotEmpty()
  @IsDate()
  dataRegistro: Date;

  @IsNotEmpty()
  @IsArray()
  inventarios: string[];

  @IsNotEmpty()
  @IsArray()
  acoes_judiciais: string[];

  @IsNotEmpty()
  @IsArray()
  compras_e_vendas: string[];

  //array de hashes do ipfs
  @IsNotEmpty()
  @IsArray()
  alteracoes: string[];

  // hash de ipfs
  @IsNotEmpty()
  document: string;
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
