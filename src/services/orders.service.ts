import { Sequelize } from 'sequelize';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

const all = async (): Promise<ServiceResponse<OrderSequelizeModel[]>> => {
  const allOrders = await OrderModel.findAll({
    include: { 
      model: ProductModel,
      attributes: [],
      as: 'productIds', 
    },
    attributes: [
      'id', 
      'userId',
      [Sequelize.fn('JSON_ARRAYAGG', Sequelize.col('productIds.id')), 'productIds'],
    ],
    raw: true,
    group: ['Order.id'],
  });

  return { status: 'SUCCESS', data: allOrders };
};

export default {
  all,
};