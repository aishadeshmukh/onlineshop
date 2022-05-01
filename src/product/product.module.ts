import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { productSchema } from './schema/product.schema';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Product", schema: productSchema },
    ]),

  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
