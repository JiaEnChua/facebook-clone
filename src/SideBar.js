import React from "react";
import "./SideBar.css";
import { useSelector } from "react-redux";
import { selectName, selectImage } from "./userSlice";
import FlagIcon from "@material-ui/icons/Flag";
import PeopleIcon from "@material-ui/icons/People";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StorefrontIcon from "@material-ui/icons/Storefront";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import EventNoteIcon from "@material-ui/icons/EventNote";
import TimerIcon from "@material-ui/icons/Timer";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SideBarRow from "./SideBarRow";

function SideBar() {
  const loggedInName = useSelector(selectName);
  const loggedInImage = useSelector(selectImage);

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <SideBarRow src={loggedInImage} title={loggedInName} />
        <SideBarRow Icon={FlagIcon} title="Pages" />
        <SideBarRow Icon={PeopleIcon} title="Friends" />
        <SideBarRow Icon={SupervisedUserCircleIcon} title="Groups" />
        <SideBarRow Icon={StorefrontIcon} title="Marketplace" />
        <SideBarRow Icon={LiveTvIcon} title="Watch" />
        <SideBarRow Icon={EventNoteIcon} title="Events" />
        <SideBarRow Icon={TimerIcon} title="Memories" />
        <SideBarRow Icon={BookmarkIcon} title="Saved" />
        <SideBarRow Icon={ArrowDropDownIcon} title="See More" arrow={true} />
      </div>
    </div>
  );
}

export default SideBar;
