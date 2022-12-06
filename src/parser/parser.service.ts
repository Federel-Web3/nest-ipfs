import { Injectable } from '@nestjs/common';
import { StoreIpfsDto } from '../dto/store-ipfs.dto';

@Injectable()
export class ParserService {
  constructor() {}

  async parse(dataInCsv: string) {
    let lines = dataInCsv.split('\n');
    console.log(lines);
    let columns = [];

    for (let i in lines) {
      columns.push(lines[i].split(';'));
    }

    console.log("HELLO WORLD");

    let storeIpfsDtoArray: StoreIpfsDto[] = [];
    for (let i in columns) {
      const storeIpfsDto = new StoreIpfsDto();
      storeIpfsDto.classe = columns[i][0];
      storeIpfsDto.rip = columns[i][1];
      storeIpfsDto.idUtilizacao = columns[i][2];
      storeIpfsDto.dataRegistro = columns[i][3];
      storeIpfsDto.UF = columns[i][4];
      storeIpfsDto.municipio = columns[i][5];
      storeIpfsDto.endereco = columns[i][6];
      storeIpfsDto.bairro = columns[i][7];
      storeIpfsDto.conceituacao = columns[i][8];
      storeIpfsDto.tipo_imovel = columns[i][9];
      storeIpfsDto.regime_utilizacao = columns[i][10];
      storeIpfsDto.proprietario_oficial = columns[i][11];
      storeIpfsDto.dataInicio = columns[i][12];
      storeIpfsDto.area_terreno = columns[i][13];
      storeIpfsDto.area_uniao = columns[i][14];
      storeIpfsDtoArray.push(storeIpfsDto);
    }

    return storeIpfsDtoArray;
  }
}