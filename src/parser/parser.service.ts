import { Injectable, Logger } from '@nestjs/common';
import { StoreIpfsDto } from '../dto/store-ipfs.dto';

@Injectable()
export class ParserService {
  private logger: Logger = new Logger('ParserService');

  constructor() {
    this.logger.log('start ParserService..');
  }

  async parse(dataInCsv: string) {
    const lines = dataInCsv.split('\n');
    console.log(lines);

    const storeIpfsDtoArray: StoreIpfsDto[] = [];

    for (const i in lines) {
      const storeIpfsDto = new StoreIpfsDto();

      const columns = [];
      columns.push(lines[i].split(';'));
      for (const i in columns) {
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
      }
      storeIpfsDtoArray.push(storeIpfsDto);
    }

    console.log(storeIpfsDtoArray);

    return storeIpfsDtoArray;
  }
}
