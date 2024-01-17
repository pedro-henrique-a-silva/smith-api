import { Request, Response } from 'express';
import OrderService from '../services/orders.service';
import mapStatusHTTP from '../utils/mapStatusHttp';

const all = async (req: Request, res: Response) => {
  const allOrders = await OrderService.all();
  const { status, data } = allOrders;
  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  all,
};