export class StoreIpfsDto {
    localizacao: string;
    dimensao: string;
    lote: string;
    quadra: string;
    //Qualificação do proprietário atual (nome, CPF, RG, estado civil etc.);
    dataRegistro_e_averbacoes: Date;
    inventarios: string[];
    acoes_judiciais: string[];
      compras_e_vendas: string[];
    //array de hashes do ipfs
    alteracoes: string[]
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