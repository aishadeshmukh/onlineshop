import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CustomMessages } from 'src/classes/custommessages';
import { StatusCodes } from 'src/classes/statuscode';
import { Response } from "../classes/Response";
import { GetProductDto } from './dto/search-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.productService.create(createProductDto);
    return new Response(StatusCodes.OK, CustomMessages.PRODUCT_CREATED, product);
  }

  @Get()
  async findAll(@Query() query: GetProductDto) {
    const products = await this.productService.findAll(query);
    return new Response(StatusCodes.OK, " All Products ", products);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productService.findOne(id);
    if(product == null)
      return new Response(StatusCodes.NOT_FOUND, CustomMessages.PRODUCT_NOT_FOUND, product);
    return new Response(StatusCodes.OK, "Product ", product);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const product = await this.productService.update(id, updateProductDto);
    if(product.matchedCount == 0)
      return new Response(StatusCodes.NOT_FOUND, CustomMessages.PRODUCT_NOT_FOUND, product);
    return new Response(StatusCodes.OK, CustomMessages.PRODUCT_UPDATED, product); 
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const product = await this.productService.remove(id);
    if(product.deletedCount == 0)
      return new Response(StatusCodes.NOT_FOUND, CustomMessages.PRODUCT_NOT_FOUND, product);
    return new Response(StatusCodes.OK, CustomMessages.ORDER_DELETED, product); 
  }
}
