import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { ProductCreateReturnType } from '../types/Product';

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

export default {
  create,
};