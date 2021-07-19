import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import productsRoutes from './routes/products.js'
import usersRoutes from './routes/users.js'
import cors from 'cors'

const app = express()
const PORT = 5000

mongoose.connect('mongodb://localhost:27017/node-express-rest-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection

app.use(bodyParser.json())
app.use(
  cors({
    origin: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Token'],
  })
)

app.use('/products', productsRoutes)
app.use('/users', usersRoutes)

app.get('/', (req, res) => {
  res.send('Gauranga')
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
