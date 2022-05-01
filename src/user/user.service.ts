import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel("User") private readonly userModel: Model<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const createduser = await this.userModel.create(createUserDto)
    return createduser.save()
  }

  async findAll() {
    const users = await this.userModel.find()
    return users
  }

  async findOne(id: string) {
    try {
      const userObj = {
        _id: id,
      };
      const user = await this.userModel.findOne(userObj);
      return user;
    } catch (err) {
      throw new Error(err);
    }    }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let userObj = {
      _id: id
    }
    const user = await this.userModel.updateOne(userObj, updateUserDto);
    return user;
  }

  async remove(id: string) {
    try {
      const userObj = {
        _id: id,
      };
      const user = await this.userModel.deleteOne(userObj);
      return user;
    } catch (err) {
      throw new Error(err);
    }    
  }
}
