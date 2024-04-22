import React from "react"
import ContentLoader from "react-content-loader"

const BrandsLoading = (props) => (
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
    <circle cx="192" cy="237" r="80" />
  </ContentLoader>
)

export default BrandsLoading
