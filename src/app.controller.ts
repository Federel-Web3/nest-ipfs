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
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  storeIpfs(@Body() storeIpfsDto: StoreIpfsDto) {
    return this.appService.storeIpfs(storeIpfsDto);
  }

  @Post('bulk')
  @UseInterceptors(FileInterceptor('file'))
  bulkStoreIpfs(@UploadedFile() file: Express.Multer.File) {
    console.log(file.buffer.toString());
  }
}

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
})
export class AppModule {}
