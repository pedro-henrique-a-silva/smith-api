import express from 'express';
import productsController from '../controllers/products.controller';
import validProductBody from '../middleware/product.middleware';

const productRouter = express.Router();

productRouter.post('/', validProductBody, productsController.create);
productRouter.get('/', productsController.all);

export default productRouter;