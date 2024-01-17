import OrderModel from "../../src/database/models/order.model"


const allOrdersMockBody = [
  OrderModel.build({
    id: 1,
    userId: 1,
    productIds: [ 1, 2 ]
  }),
  OrderModel.build({
    id: 2,
    userId: 3,
    productIds: [ 3, 4 ]
  }),
  OrderModel.build({
    id: 3,
    userId: 2,
    productIds: [ 5 ]
  })
]

export default {
  allOrdersMockBody
}