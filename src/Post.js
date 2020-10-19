import React, { useEffect, useState } from "react";
import "./Post.css";
import db from "./firebase";
import firebase from "firebase";
import { useSelector, useDispatch } from "react-redux";
import { selectName, selectImage } from "./userSlice";
import Comments from "./Comments";
import { Avatar } from "@material-ui/core";
import { showLikes } from "./postSlice";

function Post({ name, message, timestamp, image, likes, postID, comments }) {
  const [likedID, setLikedID] = useState("");
  const [hideComment, setHideComment] = useState(true);
  const loggedInName = useSelector(selectName);
  const loggedInImage = useSelector(selectImage);
  const postRef = db.collection("posts").doc(postID);
  const dispatch = useDispatch();
  const [allLikedPeople, setAllLikedPeople] = useState([]);

  const handleLike = () => {
    if (likedID) {
      postRef
        .collection("likes")
        .doc(likedID)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          setLikedID("");
        })
        .then(() => {
          postRef.update({
            likes: firebase.firestore.FieldValue.increment(-1),
          });
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    } else {
      postRef
        .collection("likes")
        .add({
          name: loggedInName,
          image: loggedInImage,
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          setLikedID(docRef.id);
        })
        .then(() => {
          postRef.update({
            likes: firebase.firestore.FieldValue.increment(1),
          });
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  };

  const handleComment = () => {
    setHideComment(!hideComment);
  };

  const handleShare = (e) => {
    // e.preventDefault();
    // db.collection("posts").add({
    //   name: loggedInName,
    //   message: input,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   image: loggedInImage,
    //   likes: 0,
    //   comments: 0,
    // });
  };

  const handleClickLikes = () => {
    dispatch(
      showLikes({
        show: true,
        likes: allLikedPeople,
      })
    );
  };

  useEffect(() => {
    postRef.collection("likes").onSnapshot((snapshot) =>
      setAllLikedPeople(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {};
  }, []);

  useEffect(() => {
    postRef
      .collection("likes")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().name === loggedInName) {
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
        <Avatar alt="ppic" src={image} />
        <div className="post__headerRight">
          <span className="post_username">{name}</span>
          <p>
            <small>{timestamp?.toDate().toUTCString()}</small>
          </p>
        </div>
      </div>

      <p className="post__message">{message}</p>
      <div className="post__stats">
        <div className="post__statsLike" onClick={handleClickLikes}>
          👍 {likes}
        </div>
        <div className="post__statsComment" onClick={handleComment}>
          {comments} Comments
        </div>
        <div className="post__statsShare">0 Shares</div>
      </div>
      <div className="post__actions">
        <button
          onClick={handleLike}
          className={likedID ? "post__likedButton" : "post__likeButton"}
        >
          👍 Like
        </button>
        <button onClick={handleComment}>Comment</button>
        <button onClick={handleShare}>⤵ Share</button>
      </div>

      <div className={hideComment ? "comment__hidden" : "comment_show"}>
        <Comments postID={postID} />
      </div>
    </div>
  );
}

export default Post;
