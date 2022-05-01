import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CustomMessages } from 'src/classes/custommessages';
import { StatusCodes } from 'src/classes/statuscode';
import { Response } from "../classes/Response";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return new Response(StatusCodes.OK, CustomMessages.USER_CREATED, user);
  }

  @Get()
  async findAll() {
    const user = await this.userService.findAll();
    if(user == null)
      return new Response(StatusCodes.OK, CustomMessages.USER_NOT_FOUND, user);
    return new Response(StatusCodes.OK, "All Users ", user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    if(user == null)
      return new Response(StatusCodes.NOT_FOUND, CustomMessages.USER_NOT_FOUND, user);
    return new Response(StatusCodes.OK, "User Details", user);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.userService.update(id, updateUserDto);
    if(user.matchedCount == 0)
      return new Response(StatusCodes.NOT_FOUND, CustomMessages.USER_NOT_FOUND, user);
    return new Response(StatusCodes.OK, CustomMessages.USER_UPDATED, user);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const user = await this.userService.remove(id);
    if(user.deletedCount == 0)
      return new Response(StatusCodes.NOT_FOUND, CustomMessages.USER_NOT_FOUND, user);
    return new Response(StatusCodes.OK, CustomMessages.USER_DELETED, user);
  }
}
