import React from "react";
import "./SideBarRow.css";
import { Avatar } from "@material-ui/core";

function SideBarRow({ src, title, Icon, arrow }) {
  return (
    <div className="sideBarRow">
      <div className="sideBarRow__container">
        {src && <Avatar src={src} style={{ height: "30px", width: "30px" }} />}
        {Icon && (
          <Icon
            style={
              arrow && {
                "background-color": "lightgray",
                "border-radius": "50px",
                padding: "2px",
              }
            }
          />
        )}
        <p>{title}</p>
      </div>
    </div>
  );
}

export default SideBarRow;
