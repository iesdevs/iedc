import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

router.get("", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});
router.post("/create", async (req, res) => {
  console.log(req.body);
});

export default router;
