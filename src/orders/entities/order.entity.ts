import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Asset } from 'src/assets/entities/asset.entity';

export enum OrderStatus {
  OPEN = 'open',
  PENDING = 'pending',
  CLOSED = 'closed',
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Asset, (item) => item.order, {
    cascade: ['insert'],
    eager: true,
  })
  @JoinColumn({ name: 'asset_id' })
  asset: Asset;

  @Column()
  asset_id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column()
  status: OrderStatus = OrderStatus.OPEN;
}
