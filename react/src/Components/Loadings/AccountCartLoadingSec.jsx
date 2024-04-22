import React from "react"
import ContentLoader from "react-content-loader"

const AccountCartLoadingSec = (props) => (
  <ContentLoader 
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 400 450"
    backgroundColor="#dcdbdb"
    foregroundColor="#bfbfbf"
    {...props}
  >
    <rect x="450" y="101" rx="0" ry="0" width="0" height="1" /> 
    <rect x="17%" y="20" rx="0" ry="0" width="64%" height="72%" /> 
    <rect x="7%" y="405" rx="0" ry="0" width="82%" height="8%" /> 
    <rect x="7%" y="362" rx="0" ry="0" width="82%" height="8%" />
  </ContentLoader>
)

export default AccountCartLoadingSec