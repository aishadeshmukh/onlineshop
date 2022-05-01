import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CustomMessages } from 'src/classes/custommessages';
import { StatusCodes } from 'src/classes/statuscode';
import { Response } from "../classes/Response";

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    const order = await this.orderService.create(createOrderDto);
    return new Response(StatusCodes.OK, CustomMessages.ORDER_CREATED, order);
  }

  @Get()
  async findAll() {
    const orders = await this.orderService.findAll();
    return new Response(StatusCodes.OK, " All orders ", orders);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const order = await this.orderService.findOne(id);
    if(order == null)
      return new Response(StatusCodes.NOT_FOUND, CustomMessages.error.ORDER_NOT_FOUND, order);
    return new Response(StatusCodes.OK, " Order ", order);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    const updatedOrder = await  this.orderService.update(id, updateOrderDto);
    if(updatedOrder.matchedCount == 0)
      return new Response(StatusCodes.NOT_FOUND, CustomMessages.error.ORDER_NOT_FOUND, updatedOrder);
    return new Response(StatusCodes.OK, CustomMessages.ORDER_UPDATED, updatedOrder);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deletedOrder = await this.orderService.remove(id);
    if(deletedOrder.deletedCount == 0)
      return new Response(StatusCodes.NOT_FOUND, CustomMessages.error.ORDER_NOT_FOUND, deletedOrder);
    return new Response(StatusCodes.OK, CustomMessages.ORDER_DELETED, deletedOrder);
  }
}
