import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  day: Number,
  month: String,
  date: String,
  dec: String,
  category: String,
  imgUrl: String,
  youtubeLink: String,
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
