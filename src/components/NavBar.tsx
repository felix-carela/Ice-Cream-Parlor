import React from "react";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div id="NavBar">
      <div id="statusBar">
        <div id="time">
          <div id="timeInner">9:41</div>
          <img id="statusIcon" src="/images/symbol.jpg"></img>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
