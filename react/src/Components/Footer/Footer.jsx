import React from "react";
import "./footer.css";
import FooterItem from "./FooterItem/FooterItem";

const Footer = () => {
  return (
    <footer>
      <div className="footer_top">
        <div className="container footer_content">
          <FooterItem title={"FAQ"} style={"a"} />
          <FooterItem title={"About"} style={"a"} />
          <FooterItem title={"Customers"} style={"a"} />
          <FooterItem title={"Customers"} style={"b"} />
        </div>
      </div>

      <div className="footer_bottom">
        <div className="container footer_bootom_content">
          <p>All rights reserved</p>
          <p>Developed by Eduard Ghazaryan</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
