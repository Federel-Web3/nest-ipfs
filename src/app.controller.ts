import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Logger,
} from '@nestjs/common';
import { AppService } from './app.service';
import { StoreIpfsDto } from './dto/store-ipfs.dto';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { ParserService } from './parser/parser.service';

@Controller()
export class AppController {
  private logger: Logger = new Logger('AppController');
  constructor(
    private readonly appService: AppService,
    private readonly parserService: ParserService,
  ) {}

  @Post()
  storeIpfs(@Body() storeIpfsDto: StoreIpfsDto) {
    return this.appService.storeIpfs(storeIpfsDto);
  }

  @Post('bulk')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'properties', maxCount: 1 },
      { name: 'owners', maxCount: 1 },
    ]),
  )
  async bulkStoreIpfs(
    @UploadedFiles()
    files: {
      properties?: Express.Multer.File[];
      owners?: Express.Multer.File[];
    },
  ) {
    const parsedArray = await this.parserService.parse(
      files.properties[0].buffer.toString(),
      files.owners[0].buffer.toString(),
    );

    return await this.appService.bulkStoreIpfs(parsedArray);
  }
}
