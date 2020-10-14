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
    // console.log("submit >> ", input);
    db.collection("posts").add({
      name: name,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      image: image,
    });
    setInput("");
  };

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
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
          name={post.data.name}
          message={post.data.message}
          timestamp={post.data.timestamp}
          image={post.data.image}
          key={post.id}
        />
      ))}
    </div>
  );
}

export default Home;
