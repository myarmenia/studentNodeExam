import React from "react";
import ContentLoader from "react-content-loader";

const AccountCartLoading = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 2000 100%"
    backgroundColor="#dcdbdb"
    foregroundColor="#bfbfbf"
    {...props}
  >
    <rect x="450" y="5" rx="0" ry="0" width="0" height="1" />
    <rect x="12" y="5" rx="0" ry="0" width="30%" height="90%" />
    <rect x="250" y="5" rx="0" ry="0" width="60%" height="25%" />
    <rect x="250" y="115" rx="0" ry="0" width="60%" height="25%" />
    <rect x="250" y="218" rx="0" ry="0" width="60%" height="25%" />
  </ContentLoader>
);

export default AccountCartLoading;
