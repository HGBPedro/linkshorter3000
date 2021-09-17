import { ObjectId } from 'bson'
import mongoose, { Schema } from 'mongoose'

const link = new Schema({
  _id: {
    type: ObjectId
  },
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

const Link = mongoose.model('links', link)

module.exports = Link