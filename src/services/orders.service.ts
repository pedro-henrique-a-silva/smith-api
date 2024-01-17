import { Sequelize } from 'sequelize';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';

const all = async (): Promise<Order[]> => {
  const products = await ProductModel.findAll({
    attributes: ['orderId', [Sequelize.fn('JSON_ARRAYAGG', Sequelize.col('id')), 'productIds']],
    group: ['orderId'],
  });
  const allOrders = await OrderModel.findAll();

  const allOrdersReturn = allOrders.map((order) => {
    const productFound = products
      .find((product) => (product.dataValues.orderId === order.dataValues.id));
    if (productFound) {
      return {
        ...order.dataValues,
        productIds: productFound.dataValues.productIds,
      };
    }
    return order.dataValues;
  });

  return allOrdersReturn;
};

export default {
  all,
};