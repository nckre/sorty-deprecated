import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { RetailersModule } from './retailers/retailers.module';

@Module({
  imports: [RetailersModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
