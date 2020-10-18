import React, { useState, useEffect } from "react";
import "./Home.css";
import db from "./firebase";
import Post from "./Post";
import HomeInput from "./HomeInput";

function Home() {
  const [posts, setPosts] = useState([]);

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
      <HomeInput />
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.data.name}
          message={post.data.message}
          timestamp={post.data.timestamp}
          image={post.data.image}
          likes={post.data.likes}
          comments={post.data.comments}
          postID={post.id}
        />
      ))}
    </div>
  );
}

export default Home;
