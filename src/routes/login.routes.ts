import express from 'express';
import loginController from '../controllers/login.controller';
import validLoginBody from '../middleware/login.middleware';

const loginRouter = express.Router();

loginRouter.post('/', validLoginBody, loginController.login);

export default loginRouter;