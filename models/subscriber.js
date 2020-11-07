"use strict";
import mongoose from 'mongoose'
const subscriberSchema = mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number
  });

const Subscriber = mongoose.model("Subscriber", subscriberSchema);
export default Subscriber