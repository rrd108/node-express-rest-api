import express from 'express'
import getUsers from '../models/users.js'

const router = express.Router()

router.get('/', (req, res) => {
  getUsers((err, users) => {
    if (err) {
      throw err
    }
    res.json(users)
  })
})

export default router
