import React from "react";
import ContentLoader from "react-content-loader";

const AccountCartLoading = (props) => (
  <ContentLoader
  speed={2}
  width="100%"
  height="100%"
  viewBox="0 0 800 450"
  backgroundColor="#dcdbdb"
  foregroundColor="#bfbfbf"
  {...props}
>
  <rect x="450" y="80" rx="0" ry="0" width="0" height="1" /> 
  <rect x="1%" y="10" rx="0" ry="0" width="30%" height="100%" /> 
  <rect x="35%" y="10" rx="0" ry="0" width="30%" height="100%" /> 
  <rect x="70%" y="10" rx="0" ry="0" width="30%" height="100%" />
  </ContentLoader>
);

export default AccountCartLoading;
