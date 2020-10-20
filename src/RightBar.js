import React from "react";
import "./RightBar.css";

function RightBar() {
  return (
    <div className="rightBar">
      <div className="rightBar__container">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpurdueieee&tabs=timeline&width=400px&height=1500px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
          width="400px"
          height="100%"
          scrolling="no"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
}

export default RightBar;
