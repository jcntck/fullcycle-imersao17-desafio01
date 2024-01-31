import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Asset {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  symbol: string;

  @OneToMany(() => Order, (item) => item.asset)
  order: Order;
}
