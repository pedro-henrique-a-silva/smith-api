import { Request, Response } from 'express';
import productService from '../services/products.service';
import mapStatusHTTP from '../utils/mapStatusHttp';

const create = async (req: Request, res: Response) => {
  const productCreated = await productService.create(req.body);

  const { status, data } = productCreated;
  
  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  create,
};