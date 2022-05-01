import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateOrderDto {

    @ApiProperty()
    status: string
}
