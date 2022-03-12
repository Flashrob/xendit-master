import {
  AllowNull,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { ApiModel, ApiModelProperty } from 'swagger-express-ts';

@ApiModel({
  description: 'Category model',
  name: 'Category',
})
@Table({
  schema: 'public',
})
class Category extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.INTEGER)
  @ApiModelProperty({
    description: 'Id of a category',
    required: true,
    example: '1',
  })
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  @ApiModelProperty({
    description: 'name of a category',
    required: true,
    example: 'cables',
  })
  name!: string;

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

export default Category;
