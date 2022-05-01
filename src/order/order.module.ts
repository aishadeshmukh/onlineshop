import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderSchema } from './schema/order.schema';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Order", schema: OrderSchema },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
