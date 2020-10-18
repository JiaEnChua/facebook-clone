import React, { useEffect, useState } from "react";
import "./Comments.css";
import { useSelector } from "react-redux";
import { selectName, selectImage } from "./userSlice";
import db from "./firebase";
import firebase from "firebase";

function Comments({ postID }) {
  const loggedInName = useSelector(selectName);
  const loggedInImage = useSelector(selectImage);
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([]);
  const postRef = db.collection("posts").doc(postID);

  const handleSubmit = (e) => {
    e.preventDefault();
    postRef
      .collection("comments")
      .add({
        name: loggedInName,
        image: loggedInImage,
        text: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        postRef.update({
          comments: firebase.firestore.FieldValue.increment(1),
        });
      });
    setInput("");
  };

  useEffect(() => {
    postRef
      .collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setComments(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    return () => {};
  }, []);

  return (
    <div className="comments">
      <div className="comments__input">
        <img src={loggedInImage} alt="ppic" />
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a comment..."
          />
        </form>
      </div>
      <div className="comments__showBox">
        {comments.map((comment) => (
          <div className="comments__showBoxContainer" key={comment.id}>
            <img src={comment.data.image} />
            <div className="comments__showBoxContainerComment">
              <div className="comments__showBoxContainerCommentNoTime">
                <p>{comment.data.name}</p>
                <p className="comments__showBoxContainerCommentNoTimeText">
                  {comment.data.text}
                </p>
              </div>
              <div className="comments__showBoxContainerCommentTime">
                {comment.data.timestamp?.toDate().toUTCString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
