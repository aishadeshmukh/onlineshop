import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Order } from './interface/order.interface';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel("Order") private readonly orderModel: Model<Order>,
  ) { }

  async create(createOrderDto: CreateOrderDto) {

    let amount = 0, orderObj = createOrderDto
    createOrderDto.products.forEach((product) => {
      amount += product.price
    })

    orderObj['amount'] = amount
    const createdOrder = await this.orderModel.create(orderObj)
    return createdOrder.save()
  }

  async findAll() {
    const orders = await this.orderModel.find({})
    return orders
}

  async findOne(id: string) {
    try {
      const orderObj = {
        _id: id,
      };
      const order = await this.orderModel.findOne(orderObj);
      return order;
    } catch (err) {
      throw new Error(err);
    }  
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderModel.updateOne({_id: id}, updateOrderDto);
    return order;
  }

  async remove(id: string) {
    try {
      const orderObj = {
        _id: id,
      };
      const order = await this.orderModel.deleteOne(orderObj);
      return order;
    } catch (err) {
      throw new Error(err);
    }  
  }
}
