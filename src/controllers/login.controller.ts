import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHttp';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const { status, data } = await loginService.login({ username, password });

  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  login,
};