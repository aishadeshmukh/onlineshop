import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './interface/product.interface'
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ProductService {

  constructor(
    @InjectModel("Product") private readonly productModel: Model<Product>,
  ) { }

  async create(createProductDto: CreateProductDto) {
    const createdProduct = await this.productModel.create(createProductDto)
    return createdProduct.save()
  }

  async findAll(query): Promise<Product[]> {
    try{
      let prodObj;

      if(query.product_title){
        prodObj = {
          product_title: query.product_title
        }
      }

      if(query.description){
        prodObj = {
          description: query.description
        }
      }

      const products = await this.productModel.find(prodObj)
      return products
    } catch(err){
      throw new Error(err)
    }
  }

  async findOne(id: string) {
    try {
      const productObj = {
        _id: id,
      };
      const product = await this.productModel.findOne(productObj);
      return product;
    } catch (err) {
      throw new Error(err);
    }  
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productModel.updateOne({_id: id}, updateProductDto);
    return product;
  }

  async remove(id: string) {
    try {
      const productObj = {
        _id: id,
      };
      const product = await this.productModel.deleteOne(productObj);
      return product;
    } catch (err) {
      throw new Error(err);
    }  
  }
}
