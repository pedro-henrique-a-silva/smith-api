import express from 'express';

import routesProducts from './routes/products.routes';

const app = express();
app.use(express.json());

app.use(express.json());
app.use('/products', routesProducts);

export default app;
