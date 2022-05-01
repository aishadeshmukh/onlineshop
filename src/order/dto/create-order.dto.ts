import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "bson";
import { IsString } from "class-validator";

class ProductCartDto {
    product: string
    product_title: string
    count: number
    price: number
}

export class CreateOrderDto {
    @ApiProperty()
    products: [ProductCartDto]
   
    @ApiProperty()
    @IsString()
    address: string
           
    @ApiProperty()
    user: string
}
