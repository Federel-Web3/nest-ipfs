import { Injectable, Logger } from '@nestjs/common';
import { StoreIpfsDto } from './dto/store-ipfs.dto';
import { Web3Storage, File, CIDString } from 'web3.storage';
import { ConfigService } from '@nestjs/config';
import { IENVs } from './config/configuration';

@Injectable()
export class AppService {
  private logger: Logger = new Logger('ParserService');
  private client: Web3Storage;

  constructor(private configService: ConfigService<IENVs>) {
    this.logger.log('start AppService..');

    this.client = new Web3Storage({
      token: this.configService.get('WEB3_STORAGE_TOKEN'),
    });
  }

  async storeIpfs(storeIpfsDto: StoreIpfsDto) {
    const buffer = Buffer.from(JSON.stringify(storeIpfsDto));
    const files = [new File([buffer], 'data.json')];
    const cid = await this.client.put(files);
    return { cid };
  }

  async bulkStoreIpfs(storeIpfsDtoArray: StoreIpfsDto[]) {
    const cids: Promise<CIDString>[] = [];

    this.logger.log('pushing promises...');
    for (let i = 0; i < storeIpfsDtoArray.length; i++) {
      const storeIpfsDto = storeIpfsDtoArray[i];
      const buffer = Buffer.from(JSON.stringify(storeIpfsDto));
      const files = [new File([buffer], 'data.json')];
      const cid = this.client.put(files);
      this.logger.log('cid sent');
      cids.push(cid);
    }

    const result = Promise.all(cids);

    return result;
  }
}
