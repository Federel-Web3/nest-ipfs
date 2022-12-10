import { Injectable, Logger } from '@nestjs/common';
import { OwnerIpfsDto } from 'src/dto/owner-ipfs.dto';
import { StoreIpfsDto } from '../dto/store-ipfs.dto';

@Injectable()
export class ParserService {
  private logger: Logger = new Logger('ParserService');

  constructor() {
    this.logger.log('start ParserService..');
  }

  async parse(dataInProperties: string, dataInOwners: string) {
    const lines = dataInProperties.split('\n');
    const linesOwners = dataInOwners.split('\n');
    const storeIpfsDtoArray: StoreIpfsDto[] = [];

    for (let i = 0; i < lines.length; i++) {
      const col = lines[i];
      const storeIpfsDto = new StoreIpfsDto();

      const columns = [];

      columns.push(col.split(';'));

      for (const i in columns) {
        storeIpfsDto.classe = columns[0];
        storeIpfsDto.rip = columns[1];
        storeIpfsDto.idUtilizacao = columns[2];
        storeIpfsDto.dataRegistro = columns[3];
        storeIpfsDto.UF = columns[4];
        storeIpfsDto.municipio = columns[5];
        storeIpfsDto.endereco = columns[6];
        storeIpfsDto.bairro = columns[7];
        storeIpfsDto.conceituacao = columns[8];
        storeIpfsDto.tipo_imovel = columns[9];
        storeIpfsDto.regime_utilizacao = columns[10];
        storeIpfsDto.proprietario_oficial = columns[11];
        storeIpfsDto.dataInicio = columns[12];
        storeIpfsDto.area_terreno = columns[13];
        storeIpfsDto.area_uniao = columns[14];
      }

      const ownerIpfsDto = new OwnerIpfsDto();

      console.log(linesOwners[i]);
      const columnsOwner = linesOwners[i].split(';');

      console.log(columnsOwner);
      ownerIpfsDto.tipoResponsavel = columnsOwner[1];
      ownerIpfsDto.codEntidade = columnsOwner[2];
      ownerIpfsDto.ocupante = columnsOwner[3];
      ownerIpfsDto.regime = columnsOwner[4];

      storeIpfsDto.proprietario = ownerIpfsDto;

      storeIpfsDtoArray.push(storeIpfsDto);
    }

    return storeIpfsDtoArray;
  }
}
