import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import ordersMock from '../../mocks/orders.mock';
import orderService from '../../../src/services/orders.service';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Should return a list of orders', async  function () {
    // Arrange
    sinon.stub(OrderModel, 'findAll')
      .resolves(ordersMock.allOrdersMockBody);

    // Act
    const serviceResponse = await orderService.all();

    // Assert
    expect(serviceResponse.status).to.eq('SUCCESS');
  });

});
