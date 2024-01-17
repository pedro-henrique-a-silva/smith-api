const loginMockBody = {
  username: "Hagar",
  password: "terrível"
};

const loginMockBodyWrongPassword = {
  username: "Hagar",
  password: "wrongPassword"
};

const loginMockBodyWithInexistentUser = {
  username: "InexistentUser",
  password: "terrível"
};

const loginMockFromDB = {
  id: 1,
  vocation: 'Guerreiro',
  level: 10,
  username: "Hagar",
  password: "$2a$10$Zefi8EQvEjdGE3vyzuDnueSnY3k/nnFJWSHOCntES3yI.YlAmGR8e"
}

export default {
  loginMockBody,
  loginMockFromDB,
  loginMockBodyWithInexistentUser,
  loginMockBodyWrongPassword
}