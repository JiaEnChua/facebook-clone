import React, { useState, useEffect } from "react";
import "./Home.css";
import firebase from "firebase";
import db from "./firebase";
import Post from "./Post";
import { useSelector } from "react-redux";
import { selectName, selectImage } from "./userSlice";

function Home() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const name = useSelector(selectName);
  const image = useSelector(selectImage);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: name,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      image: image,
      likes: 0,
    });
    setInput("");
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="home">
      <div className="home__input">
        <img src={image} alt="ppic" />
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind, ${name}?`}
          />
        </form>
      </div>
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.data.name}
          message={post.data.message}
          timestamp={post.data.timestamp}
          image={post.data.image}
          likes={post.data.likes}
          postID={post.id}
        />
      ))}
    </div>
  );
}

export default Home;
