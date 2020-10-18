import React from "react";
import "./App.css";
import Header from "./Header";
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
          <Header />
          <div className="app_containerContent">
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
