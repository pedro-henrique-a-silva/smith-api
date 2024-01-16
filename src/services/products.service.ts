import ProductModel, { 
  ProductInputtableTypes, ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

export type ProductCreateReturnType = ServiceResponse<Omit<Product, 'orderId'>>;
export type ProductAllReturnType = ServiceResponse<ProductSequelizeModel[]>;

const create = async (
  productValues: ProductInputtableTypes,
): Promise<ProductCreateReturnType> => {
  const productCreated = await ProductModel.create(productValues);

  const prouctData = {
    id: productCreated.dataValues.id,
    name: productCreated.dataValues.name,
    price: productCreated.dataValues.price,
  };

  return { status: 'CREATED', data: prouctData };
};

const all = async (): Promise<ProductAllReturnType> => {
  const products = await ProductModel.findAll();

  return { status: 'SUCCESS', data: products };
};

export default {
  create,
  all,
};