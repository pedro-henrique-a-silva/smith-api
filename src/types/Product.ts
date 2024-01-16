import { ServiceResponse } from './ServiceResponse';

export type Product = {
  id: number;
  name: string;
  price: number;
  orderId: number;
};

export type ProductCreateReturnType = ServiceResponse<Omit<Product, 'orderId'>>;