import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  subordinatesId: {
    type: [],
    required: true,
  },
  bossId: {
    type: [],
    required: true,
  },
});

export const User = mongoose.model('User', userSchema);