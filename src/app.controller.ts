import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AppService } from './app.service';
import { StoreIpfsDto } from './dto/store-ipfs.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ParserService } from './parser/parser.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly parserService: ParserService,
  ) {}

  @Post()
  storeIpfs(@Body() storeIpfsDto: StoreIpfsDto) {
    return this.appService.storeIpfs(storeIpfsDto);
  }

  @Post('bulk')
  @UseInterceptors(FileInterceptor('file'))
  async bulkStoreIpfs(@UploadedFile() file: Express.Multer.File) {
    console.log(file.buffer.toString());
    const parsedArray = await this.parserService.parse(file.buffer.toString());
    return await this.appService.bulkStoreIpfs(parsedArray);
  }
}
