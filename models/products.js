import mongoose from 'mongoose'

let productsScema = mongoose.Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
})

const Products = mongoose.model('Products', productsScema)

//get all products
const getProducts = callback => Products.find(callback)

const addProduct = (data, callback) => {
  const product = new Products({
    _id: new Date().getTime(),
    name: data.name,
    category: data.category,
    description: data.description,
    picture: data.picture,
    price: data.price,
    stock: data.stock,
  })
  product.save(callback)
}

export { getProducts, addProduct }
