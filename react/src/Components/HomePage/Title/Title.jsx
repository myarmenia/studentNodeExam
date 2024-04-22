import React from "react";
import "./title.css";
import vector from "../../../Images/Vector 1.png";

const Title = ({ title }) => {
  return (
    <div className="container pop_wines">
      <div className="title">
        <img src={vector} alt="" />

        <p>{title}</p>

        <img src={vector} alt="" />
      </div>
    </div>
  );
};

export default React.memo(Title);
