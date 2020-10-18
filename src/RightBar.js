import React from "react";
import "./RightBar.css";

function RightBar() {
  return (
    <div className="rightBar">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpurdueieee&tabs=timeline&width=340&height=1500px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
        width="340"
        height="100%"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default RightBar;
