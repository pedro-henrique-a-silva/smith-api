const productBodyCreatePost = {
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 4
}

const validProductFromDB = {
  id: 6,
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 4
}

const validProductFromService = {
  id: 6,
  name: "Martelo de Thor",
  price: "30 peças de ouro",
}

const allProductsFromDB = [
  {
    id: 1,
    name: "Excalibur",
    price: "10 peças de ouro",
    orderId: 1
  },
  {
    id: 2,
    name: "Espada Justiceira",
    price: "20 peças de ouro",
    orderId: 1
  },
]

export default {
  productBodyCreatePost,
  validProductFromDB,
  validProductFromService,
  allProductsFromDB,
}