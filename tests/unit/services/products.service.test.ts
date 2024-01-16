import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import productsService from '../../../src/services/products.service';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Product should be created', async  function () {
    // Arrange
    const mockCreateReturn = ProductModel.build(productsMock.validProductFromDB);
    sinon.stub(ProductModel, 'create')
      .resolves(mockCreateReturn);

    // Act
    const serviceResponse = await productsService.create(productsMock.productBodyCreatePost);

    // Assert
    expect(serviceResponse.status).to.eq('CREATED');
    expect(serviceResponse.data).to.deep.eq(productsMock.validProductFromService);
  });

});
