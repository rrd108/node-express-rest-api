import express from 'express'
import { getProducts, addProduct } from '../models/products.js'

const router = express.Router()

router.get('/', (req, res) => {
  getProducts((err, products) => {
    if (err) {
      throw err
    }
    res.json(products)
  })
})

router.post('/', (req, res) => {
  const data = req.body
  addProduct(data, (err, product) => {
    if (err) {
      throw err
    }
    res.json(product)
  })
})

export default router
