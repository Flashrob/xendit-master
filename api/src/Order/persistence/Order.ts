import {
  AllowNull,
  BelongsToMany,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { ApiModel, ApiModelProperty } from 'swagger-express-ts';

import Product from '../../Product/persistence/Product';
import OrderProduct from './OrderProduct';

@ApiModel({
  description: 'Order model',
  name: 'Order',
})
@Table({
  schema: 'public',
})
class Order extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column({ autoIncrement: true, type: DataType.INTEGER })
  @ApiModelProperty({
    description: 'Id of an order',
    required: true,
    example: 1,
  })
  id!: number;

  @AllowNull(false)
  @Column(DataType.DATE)
  @ApiModelProperty({
    description: 'created at timestamp',
    required: true,
  })
  createdAt!: Date;

  @AllowNull(false)
  @Column(DataType.DATE)
  @ApiModelProperty({
    description: 'updated at timestamp',
    required: true,
  })
  updatedAt!: Date;

  @BelongsToMany(() => Product, () => OrderProduct)
  Products!: Product[];
}

export default Order;
