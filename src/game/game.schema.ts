import { Schema } from 'mongoose';

const GameSchema = new Schema({
  id: Number,
  src: String,
  alt: String,
  title: String,
  price: Number,
  stars: Number,
});

export default GameSchema;
