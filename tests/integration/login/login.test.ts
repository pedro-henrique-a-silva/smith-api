import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import loginMock from '../../mocks/login.mock';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('should return 200 and key token', async function () {
    const requestBody = loginMock.loginMockBody;


    const response = await chai.request(app)
      .post('/login')
      .send(requestBody);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('token');
  });
});
