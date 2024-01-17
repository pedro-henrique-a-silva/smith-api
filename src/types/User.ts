export type User = {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
};

export type UserLoginBody = {
  username: string;
  password: string;
};
