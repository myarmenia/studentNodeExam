import React from "react";
import "./signPage.css";
import Nav from "../../Components/HomePage/Nav/Nav";
import img from "../../Images/backgrounds/Asset 6.jpg";
import SignIn from "../../Components/SignIn_SignUp/SignIn";
import requireNotAuth from "../../HOC/requireNotAuth";
import { useLocation } from "react-router-dom";

const SignInPgae = () => {
  const location = useLocation();

  window.scrollTo({
    top: 0,
    behavior: "instant",
  });

  // if(location.pathname === '/user/signin'){
  //   document.body.style.overflow = "hidden"
  // }

  return (
    <div className="sign_div">
      <Nav />
      <div className="sign_content">
        <div className="sign_img">
          <img src={img} alt="" />
        </div>
        <SignIn />
      </div>
    </div>
  );
};

export default requireNotAuth(SignInPgae);
