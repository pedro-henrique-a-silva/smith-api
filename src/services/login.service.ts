import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { UserLoginBody } from '../types/User';
import { ServiceResponse } from '../types/ServiceResponse';
import jwt from '../utils/jwt.util';

const INVALID_FIELDS = 'Username or password invalid';

const login = async (
  userData: UserLoginBody,
): Promise<ServiceResponse<{ token: string }>> => {
  const { username, password } = userData;
  const user = await UserModel.findOne({ where: { username } });

  if (!user) {
    return { status: 'UNAUTHORIZED', data: { message: INVALID_FIELDS } };
  }

  const isPasswordValid = await bcrypt.compare(password, user.dataValues.password);

  if (!isPasswordValid) {
    return { status: 'UNAUTHORIZED', data: { message: INVALID_FIELDS } };
  }

  const token = jwt.sign({ id: user.dataValues.id, username: user.dataValues.username });

  return { status: 'SUCCESS', data: { token } };
};

export default {
  login,
};