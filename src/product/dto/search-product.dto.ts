import { ApiProperty } from "@nestjs/swagger";

export class GetProductDto {
  @ApiProperty({ required: false })
  readonly product_title: string;

  @ApiProperty({ required: false })
  readonly description: string;

}
