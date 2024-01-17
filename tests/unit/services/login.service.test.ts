import { expect } from 'chai';
import sinon from 'sinon';
import LoginModel from '../../../src/database/models/user.model';
import loginService from '../../../src/services/login.service';
import loginMock from '../../mocks/login.mock';
import {ServiceResponseError, ServiceResponseSuccess} from '../../../src/types/ServiceResponse';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Should return status SUCCESS and token', async  function () {
    const mockReturnFromDb = LoginModel.build(loginMock.loginMockFromDB);
    // Arrange
    sinon.stub(LoginModel, 'findOne')
      .resolves(mockReturnFromDb);

    // Act
    const serviceResponse = await loginService.login(loginMock.loginMockBody);

    // Assert
    expect(serviceResponse.status).to.eq('SUCCESS');
    expect(serviceResponse.data).to.have.property('token');
  });

  it('Should return status UNAUTHORIZED with inexistent user', async  function () {
    // Arrange
    const mockReturnFromDb = LoginModel.build(loginMock.loginMockFromDB);
    sinon.stub(LoginModel, 'findOne')
      .resolves(mockReturnFromDb);

    // Act
    const serviceResponse = await loginService.login(
      loginMock.loginMockBodyWrongPassword) as ServiceResponseError;

    // Assert
    expect(serviceResponse.status).to.eq('UNAUTHORIZED');
    expect(serviceResponse.data.message).to.eq('Username or password invalid');
  });

  it('Should return status UNAUTHORIZED with wrong password', async  function () {
    // Arrange
    sinon.stub(LoginModel, 'findOne')
      .resolves(null);

    // Act
    const serviceResponse = await loginService.login(
      loginMock.loginMockBodyWithInexistentUser) as ServiceResponseError;

    // Assert
    expect(serviceResponse.status).to.eq('UNAUTHORIZED');
    expect(serviceResponse.data.message).to.eq('Username or password invalid');
  });
});
