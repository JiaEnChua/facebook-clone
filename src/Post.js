import React, { useEffect, useState } from "react";
import "./Post.css";
import db from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectName, selectImage } from "./userSlice";

function Post({ name, message, timestamp, image, likes, postID }) {
  const [liked, setLiked] = useState(false);
  const [likedID, setLikedID] = useState("");
  const loggedInName = useSelector(selectName);
  const postRef = db.collection("posts").doc(postID);

  const handleLike = () => {
    if (liked) {
      postRef.update({
        likes: firebase.firestore.FieldValue.increment(-1),
      });
      postRef
        .collection("likes")
        .doc(likedID)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          setLiked(false);
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    } else {
      postRef.update({
        likes: firebase.firestore.FieldValue.increment(1),
      });
      postRef
        .collection("likes")
        .add({
          name: name,
          image: image,
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          setLikedID(docRef.id);
          setLiked(true);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  };

  useEffect(() => {
    postRef
      .collection("likes")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach((doc) => {
          if (doc.data().name === loggedInName) {
            setLiked(true);
            setLikedID(doc.id);
          }
        });
      })
      .catch((err) => console.log(err.message));
    return () => {};
  }, []);

  return (
    <div className="post">
      <div className="post__header">
        <img alt="ppic" src={image} className="post__ppic"></img>
        <div className="post__headerRight">
          <span className="post_username">{name}</span>
          <p>
            <small>{timestamp?.toDate().toUTCString()}</small>
          </p>
        </div>
      </div>

      <p className="post__message">{message}</p>
      <div className="post__stats">
        <div className="post__statsLike">👍 {likes}</div>
        <div className="post__statsComment">2 Comments</div>
        <div className="post__statsShare">6 Shares</div>
      </div>
      <div className="post__actions">
        <button
          onClick={handleLike}
          className={liked ? "post__likedButton" : "post__likeButton"}
        >
          👍 Like
        </button>
        <button>Comment</button>
        <button>⤵ Share</button>
      </div>
    </div>
  );
}

export default Post;
