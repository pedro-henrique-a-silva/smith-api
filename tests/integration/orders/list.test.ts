import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel, { OrderSequelizeModel } from '../../../src/database/models/order.model';
import app from '../../../src/app';
import ordersMock from '../../mocks/orders.mock';
import productsMock from '../../mocks/products.mock';
import ProductModel, { ProductSequelizeModel } from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return 200 OK and a list of Orders', async function () {

    // sinon.stub(ProductModel, 'findAll')
    //   .resolves(productsMock.allProductsGroupedFromDB as unknown as ProductSequelizeModel[]);

    // sinon.stub(OrderModel, 'findAll')
    //   .resolves(ordersMock.allOrdersMockFromDB as unknown as OrderSequelizeModel[]);

    const response = await chai.request(app).get('/orders');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.eq(ordersMock.allOrdersMockBody); 
  });
});
