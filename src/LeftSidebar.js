import { Avatar } from "@mui/material";
import React from "react";
import "./LeftSidebar.css";

function LeftSidebar() {
  return (
    <div className="leftSidebar">
      <div className="leftSidebar__top">
        <img src="https://pbs.twimg.com/media/EG53kL5U8AAObQ5.jpg" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2 className="leftSidebar__title">Eon Sik Jeong</h2>
        <h4 className="leftSidebar__subtitle">eonsik@naver.com</h4>
      </div>

      <div className="leftSidebar__stats">
        <div className="leftSidebar__stat">
          <p>Who Viewed You</p>
          <p className="leftSidebar__statNum"> 2,543</p>
        </div>
        <div className="leftSidebar__stat">
          <p>Views on Post</p>
          <p className="leftSidebar__statNum"> 2,448</p>
        </div>
      </div>

      <div className="leftSidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default LeftSidebar;
