import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { ApiModel, ApiModelProperty } from 'swagger-express-ts';

import Category from '../../Category/persistence/Category';

@ApiModel({
  description: 'Product model',
  name: 'Product',
})
@Table({
  schema: 'public',
})
class Product extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.INTEGER)
  @ApiModelProperty({
    description: 'Id of a product',
    required: true,
    example: 1,
  })
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  @ApiModelProperty({
    description: 'name of a product',
    required: true,
    example: 'Playstation 5',
  })
  name!: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  @ApiModelProperty({
    description: 'Price of a product in SGD',
    required: true,
    example: 200,
  })
  price!: number;

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

  @AllowNull(false)
  @ForeignKey(() => Category)
  @Column(DataType.INTEGER)
  @ApiModelProperty({
    description: 'Id of a category',
    required: true,
  })
  CategoryId!: number;

  @BelongsTo(() => Category)
  Category!: Category;
}

export default Product;
