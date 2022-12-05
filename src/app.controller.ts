import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { StoreIpfsDto } from './dto/store-ipfs.dto';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()  
  storeIpfs(
    @Body() storeIpfsDto: StoreIpfsDto,
  ) {
    return this.appService.storeIpfs(storeIpfsDto)

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
