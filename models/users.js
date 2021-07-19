import mongoose from 'mongoose'

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
const getUsers = (callback, limit) => Users.find(callback).limit(limit)

export default getUsers
