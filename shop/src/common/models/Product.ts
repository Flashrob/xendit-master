import { Category } from './Category';

export interface Product {
  id: number;
  name: string;
  price: number;
  Categories?: Category[];
  createdAt: Date;
  updatedAt: Date;
}
