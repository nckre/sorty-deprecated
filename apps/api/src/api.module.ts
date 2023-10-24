import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { DatabaseModule } from '@app/common';
import { RetailersModule } from './retailers/retailers.module';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [RetailersModule, StoresModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
