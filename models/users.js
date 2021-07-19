import mongoose from 'mongoose'
import crypto from 'crypto'

let usersScema = mongoose.Schema({
  _id: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  token: {
    type: String,
    required: true,
  },
})

const Users = mongoose.model('users', usersScema)

//get all users
const getUsers = callback => Users.find(callback)

const getToken = (data, callback) =>
  Users.findOne(
    {
      email: data.email,
      password: crypto.createHash('md5').update(data.password).digest('hex'),
    },
    callback
  )

export { getUsers, getToken }
