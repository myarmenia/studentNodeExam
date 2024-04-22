import React from "react";
import "./support.css";
import bgimg from "../../../Images/backgrounds/support.jpg";

const Support = () => {
  return (
    <div className="support">
      <h2>How Can We Help You?</h2>
      <input type="text" placeholder="Please describe your problem" />
      <div className="img_div">
        <img src={bgimg} alt="" />
      </div>
    </div>
  );
};

export default React.memo(Support);
