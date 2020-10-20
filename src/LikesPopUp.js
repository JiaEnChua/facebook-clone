import React, { useEffect, useState } from "react";
import "./LikesPopUp.css";
import ClearIcon from "@material-ui/icons/Clear";
import { useSelector, useDispatch } from "react-redux";
import { showLikes, selectLikes } from "./postSlice";
import { Avatar } from "@material-ui/core";

function LikesPopUp({ hideCss }) {
  const dispatch = useDispatch();
  const likes = useSelector(selectLikes);
  const closePopUp = () => {
    dispatch(showLikes(false));
  };

  // console.log("SelectLikes >>> ", likes);

  return (
    <div className={"likesPopUp " + hideCss}>
      <div className="likesPopUp__container">
        <div className="likesPopUp__containerCross">
          <ClearIcon onClick={closePopUp} />
        </div>
        {likes?.map((like) => (
          <div className="likesPopUp__containerLike">
            <Avatar src={like.data.image} alt="" />
            <p>{like.data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikesPopUp;
