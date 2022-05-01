import {
    IsString,
    IsBoolean,
    IsNotEmpty,
    IsEmail,
  } from "class-validator";
  import { ApiProperty } from "@nestjs/swagger";
  
  export class CreateUserDto {
    @ApiProperty()
    @IsString()
    readonly first_name: string;
  
    @ApiProperty()
    @IsString()
    readonly last_name: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
  
    @ApiProperty()
    readonly phone: number;
}
  