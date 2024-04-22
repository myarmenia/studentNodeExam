import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../Utils/accontUtils";

const requireAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const token = getAccessToken();

    if (!token) {
      window.location.href = "/user/signin";
    } else {
      return <WrappedComponent {...props} />;
    }
  };
};

export default requireAuth;
