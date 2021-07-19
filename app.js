import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import productsRoutes from './routes/products.js'

const app = express()
const PORT = 5000

mongoose.connect('mongodb://localhost:27017/node-express-rest-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection

app.use(bodyParser.json())
app.use('/products', productsRoutes)

app.get('/', (req, res) => {
  res.send('Gauranga')
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
