import { Injectable } from '@nestjs/common';
import { StoreIpfsDto } from '../dto/store-ipfs.dto';

@Injectable()
export class ParserService {
  constructor() {}

  async parse(dataInCsv: string) {
    return [] as StoreIpfsDto[];
  }
}
