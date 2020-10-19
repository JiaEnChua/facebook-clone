import React, { useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { selectName, selectImage, logout } from "./userSlice";
import { auth } from "./firebase";
import { Avatar } from "@material-ui/core";

function Header() {
  const dispatch = useDispatch();
  const loggedInName = useSelector(selectName);
  const loggedInImage = useSelector(selectImage);
  const [hideLogout, setHideLogout] = useState(true);
  const handleClick = () => {
    setHideLogout(!hideLogout);
  };

  const logOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header__top">
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
            <Avatar src={loggedInImage} alt="userpic" />
            <p>{loggedInName}</p>
            <AddIcon />
            <QuestionAnswerIcon />
            <NotificationsIcon />
            <ArrowDropDownIcon onClick={handleClick} />
          </div>
        </div>
      </div>
      <div className={hideLogout ? "header__logoutHide" : "header__logout"}>
        <p onClick={logOut}>Logout</p>
      </div>
    </div>
  );
}

export default Header;
