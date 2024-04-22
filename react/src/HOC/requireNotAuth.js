import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../Utils/accontUtils";

const requireNotAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const token = getAccessToken();

    if (token) {
      window.location.href = "/user/account";
    } else {
      return <WrappedComponent {...props} />;
    }
  };
};

export default requireNotAuth;
