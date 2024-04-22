import React from "react";
import "./signPage.css";
import Nav from "../../Components/HomePage/Nav/Nav";
import img from "../../Images/backgrounds/Asset 6.jpg";
import SignUp from "../../Components/SignIn_SignUp/SignUp";
import requireNotAuth from "../../HOC/requireNotAuth";
import { useLocation } from "react-router-dom";

const SignUpPgae = () => {
  const location = useLocation();

  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
  // if(location.pathname === '/user/signup'){
  //   document.body.style.overflow = "hidden"
  // }
  return (
    <div className="sign_div">
      <Nav />
      <div className="sign_content">
        <div className="sign_img">
          <img src={img} alt="" />
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default requireNotAuth(SignUpPgae);
