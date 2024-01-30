import { Module } from '@nestjs/common';
import { AssetsModule } from './assets/assets.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Asset } from './assets/entities/asset.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/desafio-nestjs',
      entities: [Asset],
      synchronize: true,
      logging: true,
    }),
    AssetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
