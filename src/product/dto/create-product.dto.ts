import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProductDto {

    @ApiProperty()
    @IsString()
    product_title: string
    
    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    price: number
}
