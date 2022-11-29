import React, { useState } from "react";
import { loginWithGoogle } from "../../../shared/firebase/config";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { API_CLIENT } from "../../../shared/services/api-client.js";
const Header = () => {
  const [user, setUser] = useState({ userInfo: {}, isLogin: false });
  const navigate = useNavigate();
  const doLogin = () => {
    const promise = loginWithGoogle();
    promise
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(result);
        const user = result.user;
        setUser({ userInfo: user, isLogin: true });
        try {
          console.log("hello ",process.env.REACT_APP_OAUTH);
          const response = await API_CLIENT.post("http://localhost:1256/oauth", {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          });
          console.log("RESPONSE ", response);
          navigate("/questions", {
            state: { userName: user.displayName },
          });
        } catch (err) {
          console.log("ERROR CONNECTING DB", err);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Code Editor - Welcome {user.userInfo.displayName}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={doLogin}>
                  {user.isLogin ? <span>Sign out</span> : <span>Sign In</span>}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
