import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { login } from "./userSlice";
import { useDispatch } from "react-redux";
import firebase from "firebase";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        return auth.signInWithPopup(provider);
      })
      .then((result) => {
        // console.log("User signed in >>> ", result.user);
        const userData = JSON.parse(JSON.stringify(result.user));
        dispatch(login(userData));
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <button onClick={signIn}>Sign In With Google</button>
    </div>
  );
}

export default Login;
