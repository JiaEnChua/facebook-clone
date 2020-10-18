import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useSelector } from "react-redux";
import { selectName, selectImage } from "./userSlice";

function Header() {
  const loggedInName = useSelector(selectName);
  const loggedInImage = useSelector(selectImage);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <img
            src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
            alt="fblogo"
          />
          <input placeholder="Search Facebook"></input>
        </div>
        <div className="header__middle">
          <HomeIcon />
          <FlagIcon />
          <LiveTvIcon />
          <StorefrontIcon />
          <SupervisedUserCircleIcon />
        </div>
        <div className="header__right">
          <img src={loggedInImage} alt="userpic" />
          <p>{loggedInName}</p>
          <AddIcon />
          <QuestionAnswerIcon />
          <NotificationsIcon />
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
