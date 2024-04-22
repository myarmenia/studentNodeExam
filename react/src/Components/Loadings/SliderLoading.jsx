import React from "react";
import ContentLoader from "react-content-loader";

const SliderLoading = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={450}
    viewBox="0 0 400 450"
    backgroundColor="#dcdbdb"
    foregroundColor="#bfbfbf"
    {...props}
  >
    <rect x="450" y="101" rx="0" ry="0" width="0" height="1" />
    <rect x="65" y="32" rx="0" ry="0" width="250" height="400" />
  </ContentLoader>
);

export default React.memo(SliderLoading);
