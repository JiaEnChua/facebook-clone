import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import SideBar from "./SideBar";
import Login from "./Login";
import RightBar from "./RightBar";
import LikesPopUp from "./LikesPopUp";
import { selectName } from "./userSlice";
import { selectShow } from "./postSlice";
import { useSelector } from "react-redux";

function App() {
  const name = useSelector(selectName);
  const show = useSelector(selectShow);
  if (show) {
    document.documentElement.style.setProperty("overflow", "hidden");
  } else {
    document.documentElement.style.setProperty("overflow", "");
  }
  return (
    <div className="app">
      {name ? (
        <div className="app_container">
          <Header />
          <div className="app_containerContent">
            <LikesPopUp hideCSS={show ? "" : "hide"} />
            <SideBar />
            <Home />
            <RightBar />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
