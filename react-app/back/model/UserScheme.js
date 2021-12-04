const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true
  },
  messeges: {
    type: Array,
    required: true,
  }
})

module.exports = mongoose.model('user', userSchema)