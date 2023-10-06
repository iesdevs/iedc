import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

router.get("", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});
router.post("/create", async (req, res) => {
  try {
    const {
      title,
      subTitle,
      day,
      month,
      date,
      dec,
      category,
      imgUrl,
      youtubeLink,
    } = req.body;
    const newEvent = new Event({
      title,
      subTitle,
      day,
      month,
      date,
      dec,
      category,
      imgUrl,
      youtubeLink,
    });
    const data = await newEvent.save();
    res.json({ STATUS: "SUCESS", data });
  } catch (error) {
    console.log(error);
  }
});

export default router;
