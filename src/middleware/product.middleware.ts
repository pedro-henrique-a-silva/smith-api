import { NextFunction, Request, Response } from 'express';
import joi from 'joi';
import mapStatusHTTP from '../utils/mapStatusHttp';

const loginBodySchema = joi.object({
  name: joi.string().required().min(3).messages({
    'any.required': 'INVALID_DATA|"name" is required',
    'string.base': 'UNABLE_TO_PROCESS|"name" must be a string',
    'string.min': 'UNABLE_TO_PROCESS|"name" length must be at least 3 characters long',
  }),
  price: joi.string().required().min(3).messages({
    'any.required': 'INVALID_DATA|"price" is required',
    'string.base': 'UNABLE_TO_PROCESS|"price" must be a string',
    'string.min': 'UNABLE_TO_PROCESS|"price" length must be at least 3 characters long',
  }),
  orderId: joi.number().required(),
});

function validProductBody(req: Request, res: Response, next: NextFunction): Response | void {
  const { error } = loginBodySchema.validate(req.body);

  if (error) {
    const [status, message] = error.message.split('|');
    return res.status(mapStatusHTTP(status)).json({ message });
  }

  next();
}

export default validProductBody;