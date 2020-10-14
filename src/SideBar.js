import React, { useEffect } from "react";
import "./SideBar.css";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase";
import { selectName, logout } from "./userSlice";

function SideBar() {
  const name = useSelector(selectName);
  const dispatch = useDispatch();
  const logOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="sidebar">
      <p>{name}</p>
      <button onClick={logOut}>Logout</button>
    </div>
  );
}

export default SideBar;
