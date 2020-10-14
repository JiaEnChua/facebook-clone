import React from "react";
import "./App.css";
import Home from "./Home";
import SideBar from "./SideBar";
import Login from "./Login";
import RightBar from "./RightBar";
import { selectName } from "./userSlice";
import { useSelector } from "react-redux";

function App() {
  const name = useSelector(selectName);

  return (
    <div className="app">
      {name ? (
        <div className="app_container">
          <SideBar />
          <Home />
          <RightBar />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
