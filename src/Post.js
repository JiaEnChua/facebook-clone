import React from "react";
import "./Post.css";

function Post({ name, message, timestamp, image }) {
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
        <div className="post__statsLike">💌👍 44</div>
        <div className="post__statsComment">2 Comments</div>
        <div className="post__statsShare">6 Shares</div>
      </div>
      <div className="post__actions">
        <button>👍 Like</button>
        <button>Comment</button>
        <button>⤵ Share</button>
      </div>
    </div>
  );
}

export default Post;
