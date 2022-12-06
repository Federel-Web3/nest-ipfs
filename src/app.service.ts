import { Injectable } from '@nestjs/common';
import { StoreIpfsDto } from './dto/store-ipfs.dto';
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import { ConfigService } from '@nestjs/config';
import { IENVs } from './config/configuration';



@Injectable()
export class AppService {

  constructor(private configService: ConfigService<IENVs>){}

  getHello(): string {
    return 'Hello World!';
  }




  storeIpfs(storeIpfsDto: StoreIpfsDto) {
    console.log(this.configService.get("WEB3_STORAGE_TOKEN"))
    console.log(storeIpfsDto)





  }
}
