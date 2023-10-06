import React, { useEffect, useState } from "react";
import axios from "axios";

const CreateEvent = () => {
  const [events, setEvents] = useState([]);

  const [title, setTitle] = useState("");
  const [subTitle, setSubtile] = useState("");
  const [desc, setDesc] = useState("");
  const [day, setDay] = useState();
  const [month, setMonth] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  console.log("env",`${process.env.SERVER_URL}+/api/event`)

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await axios.get(`${process.env.SERVER_URL}/api/event`);
      setEvents(response.data);
    };
    fetchEvent();
  }, []);

  const registerEvent = async () => {
    const formData = {
      title,
      subTitle,
      day,
      month,
      dec: desc,
      category,
      imgUrl,
      youtubeLink,
    };
    const response = await axios.post(
      `${process.env.SERVER_URL}/api/event/create`,
      formData
    );
    console.log(response.data);
  };

  return (
    <div className="admin-event-container">
      <div>
        <h2>Available events</h2>
        {events.map((event) => (
          <p>event</p>
        ))}
      </div>
      <div className="admin-create-event-form">
        <h2>Add Events</h2>
        <input
          placeholder="Event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Event sub title"
          value={subTitle}
          onChange={(e) => setSubtile(e.target.value)}
        />
        <input
          placeholder="Event Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <input
          placeholder="Event Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <input
          placeholder="Event category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          placeholder="Event desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          placeholder="Event image"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <input
          placeholder="Event youtube link"
          value={youtubeLink}
          onChange={(e) => setYoutubeLink(e.target.value)}
        />
        <button onClick={registerEvent}>Register Event</button>
      </div>
    </div>
  );
};

export default CreateEvent;
