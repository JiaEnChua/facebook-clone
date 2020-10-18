import React, { useState } from "react";
import "./HomeInput.css";
import db from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectName, selectImage } from "./userSlice";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoIcon from "@material-ui/icons/Photo";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

function HomeInput() {
  const [input, setInput] = useState("");
  const loggedInName = useSelector(selectName);
  const loggedInImage = useSelector(selectImage);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: loggedInName,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      image: loggedInImage,
      likes: 0,
      comments: 0,
    });
    setInput("");
  };
  return (
    <div className="homeInput">
      <div className="homeInput__container">
        <Avatar src={loggedInImage} alt="ppic" />
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind, ${loggedInName}?`}
          />
        </form>
      </div>
      <div className="homeInput__actions">
        <div className="homeInput__action liveVideo">
          <VideocamIcon />
          <p>Live Video</p>
        </div>
        <div className="homeInput__action photoVideo">
          <PhotoIcon />
          <p>Photo/Video</p>
        </div>
        <div className="homeInput__action feelingActivity">
          <SentimentVerySatisfiedIcon />
          <p>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default HomeInput;
