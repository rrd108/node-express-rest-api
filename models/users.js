import mongoose from 'mongoose'
import crypto from 'crypto'

let usersSchema = mongoose.Schema({
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

const Users = mongoose.model('Users', usersSchema)

const getUsers = (callback, limit) => Users.find(callback).limit(limit)

const getToken = (data, callback) =>
  Users.findOne(
    {
      email: data.email,
      password: crypto.createHash('md5').update(data.password).digest('hex'),
    },
    callback
  )

const validateToken = (token, callback) =>
  Users.findOne({ token: token }, callback)

export { getUsers, getToken, validateToken }
