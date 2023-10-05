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
  dec: String,
  key: String,
  data: String,
  youtubeLink: String,
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
