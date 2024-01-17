import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

const all = async (req: Request, res: Response) => {
  const allOrders = await OrderService.all();
  return res.status(200).json(allOrders);
};

export default {
  all,
};