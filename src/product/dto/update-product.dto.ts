import { ApiProperty } from "@nestjs/swagger";

export class UpdateProductDto {

    @ApiProperty({required: false})
    product_title: string
    
    @ApiProperty({required: false})
    description: string

    @ApiProperty({required: false})
    price: number
}
