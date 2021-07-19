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
const getUsers = callback => Users.find(callback)

export default getUsers
