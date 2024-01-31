import { Module } from '@nestjs/common';
import { AssetsModule } from './assets/assets.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Asset } from './assets/entities/asset.entity';
import { Order } from './orders/entities/order.entity';

import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/desafio-nestjs',
      entities: [Asset, Order],
      synchronize: true,
      logging: true,
    }),
    AssetsModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
