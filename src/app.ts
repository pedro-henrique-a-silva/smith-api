import express from 'express';

import routesProducts from './routes/products.routes';
import routesOrder from './routes/orders.routes';

const app = express();
app.use(express.json());

app.use(express.json());
app.use('/products', routesProducts);
app.use('/orders', routesOrder);

export default app;
