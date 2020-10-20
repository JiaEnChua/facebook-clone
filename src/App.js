import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import SideBar from "./SideBar";
import Login from "./Login";
import RightBar from "./RightBar";
import LikesPopUp from "./LikesPopUp";
import LeftPanel from "./LeftPanel";
import { selectName } from "./userSlice";
import { selectShow } from "./postSlice";
import { selectShowLP } from "./clickSlice";
import { useSelector } from "react-redux";

function App() {
  const name = useSelector(selectName);
  const show = useSelector(selectShow);
  const showLP = useSelector(selectShowLP);
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
          <LeftPanel hideCss={showLP ? "" : "hide"} />
          <LikesPopUp hideCss={show ? "" : "hide"} />
          <div className="app_containerContent">
            <div className="app_containerContentSideBar">
              <SideBar />
            </div>

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
