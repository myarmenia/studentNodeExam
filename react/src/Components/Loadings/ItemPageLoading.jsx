import React from "react"
import ContentLoader from "react-content-loader"

const ItemPageLoading = (props) => (
  <ContentLoader 
    speed={2}
    width={2500}
    height={1000}
    viewBox="0 0 2500 1000"
    backgroundColor="#dcdbdb"
    foregroundColor="#bfbfbf"
    {...props}
  >
    <rect x="550" y="325" rx="0" ry="0" width="440" height="160" /> 
    <rect x="550" y="101" rx="0" ry="0" width="0" height="1" /> 
    <rect x="550" y="29" rx="0" ry="0" width="470" height="95" /> 
    <rect x="550" y="139" rx="0" ry="0" width="440" height="170" /> 
    <rect x="3" y="29" rx="0" ry="0" width="500" height="460" />
  </ContentLoader>
)

export default React.memo(ItemPageLoading)