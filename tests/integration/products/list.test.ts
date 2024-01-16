import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel, { ProductSequelizeModel } from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';


chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('should return 200 OK and a list of Products', async function () {

    sinon.stub(ProductModel, 'findAll')
      .resolves(productsMock.allProductsFromDB as unknown as ProductSequelizeModel[]);

    const response = await chai.request(app).get('/products');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.eq(productsMock.allProductsFromDB); 
  });
});
