import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { MulterModule } from "@nestjs/platform-express";
import * as config from "config";

@Module({
  imports: [ProductModule, OrderModule, UserModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(config.mongo.connectionString),
    MulterModule.register({
      dest: "../public/images",
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
