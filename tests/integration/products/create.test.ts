import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

import productMock from '../../mocks/products.mock';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return 201 and the created product', async function () {
    const requestBody = productMock.productBodyCreatePost;

    const response = await chai.request(app)
      .post('/products')
      .send(requestBody);

    expect(response.status).to.equal(201);
  });
});
