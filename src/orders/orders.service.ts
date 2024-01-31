import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateOrderDto } from './dto/create-order.dto';

import { Order } from './entities/order.entity';
import { Asset } from 'src/assets/entities/asset.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const order = this.orderRepository.create(createOrderDto);
    order.asset = new Asset();
    order.asset.id = createOrderDto.asset_id;
    console.log(order);
    return this.orderRepository.save(order);
  }

  async findAll() {
    return this.orderRepository.find();
  }
}
