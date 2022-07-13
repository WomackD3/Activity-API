import mongoose from "mongoose";
const Schema = mongoose.Schema;



let activitiesSchema = new Schema(
{
  activity: String,
  type: String,
  participants: Number,
  price: Number,
  link: String,
  key: Number,
  accessibility: Number
  })

  export default mongoose.model("activities", activitiesSchema)
