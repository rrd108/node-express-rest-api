import mongoose from 'mongoose'

let productsSchema = mongoose.Schema({
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

const Products = mongoose.model('Products', productsSchema)

const getProducts = (callback, limit) => Products.find(callback).limit(limit)

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

export { addProduct, getProducts }
