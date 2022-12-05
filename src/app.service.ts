import { Injectable } from '@nestjs/common';
import { StoreIpfsDto } from './dto/store-ipfs.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }




  storeIpfs(storeIpfsDto: StoreIpfsDto) {
    console.log(storeIpfsDto)



  }
}
