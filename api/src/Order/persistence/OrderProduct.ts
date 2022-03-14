import {
  AllowNull,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { ApiModel, ApiModelProperty } from 'swagger-express-ts';

import Order from '../../Order/persistence/Order';
import Product from '../../Product/persistence/Product';

@ApiModel({
  description: 'OrderProduct model',
  name: 'OrderProduct',
})
@Table({
  schema: 'public',
})
class OrderProduct extends Model {
  @PrimaryKey
  @ForeignKey(() => Order)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  @ApiModelProperty({
    description: 'id of an Order',
    required: true,
    example: 1,
  })
  OrderId!: number;

  @PrimaryKey
  @ForeignKey(() => Product)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  @ApiModelProperty({
    description: 'id of a Product',
    required: true,
    example: 1,
  })
  ProductId!: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  @ApiModelProperty({
    description: 'quantity of the associated product',
    required: true,
    example: 5,
  })
  quantity!: number;

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
}

export default OrderProduct;
