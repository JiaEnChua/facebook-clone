import React from "react";
import "./LeftPanel.css";
import SideBar from "./SideBar";

function LeftPanel({ hideCss }) {
  return (
    <div className={"leftPanel " + hideCss}>
      <input placeholder="Search Facebook" className="leftPanel__search" />
      <SideBar />
    </div>
  );
}

export default LeftPanel;
