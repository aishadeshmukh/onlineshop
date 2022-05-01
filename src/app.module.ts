import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductModule, OrderModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
