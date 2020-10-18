import React, { useEffect } from "react";
import "./SideBar.css";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase";
import { selectName, selectImage, logout } from "./userSlice";

function SideBar() {
  const loggedInName = useSelector(selectName);
  const loggedInImage = useSelector(selectImage);
  const dispatch = useDispatch();
  const logOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebar__user">
        <img src={loggedInImage} />
        <p>{loggedInName}</p>
      </div>

      <button onClick={logOut}>Logout</button>
    </div>
  );
}

export default SideBar;
