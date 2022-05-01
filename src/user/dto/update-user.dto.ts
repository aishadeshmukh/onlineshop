import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {

    @ApiProperty({required: false})
    readonly last_name: string;

    @ApiProperty({required: false})
    readonly phone: number;

}
