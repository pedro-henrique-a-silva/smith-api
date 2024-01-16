import express from 'express';
import productsController from '../controllers/products.controller';

const productRouter = express.Router();

productRouter.post('/', productsController.create);

export default productRouter;