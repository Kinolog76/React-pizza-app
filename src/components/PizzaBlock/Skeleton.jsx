import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={535}
    viewBox="0 0 300 535"
    backgroundColor="#e8e8e8"
    foregroundColor="#e0e0e0"
    {...props}>
    <circle cx="152" cy="130" r="70" />
    <rect x="60" y="235" rx="0" ry="0" width="171" height="27" />
    <rect x="12" y="309" rx="0" ry="0" width="276" height="82" />
    <rect x="14" y="409" rx="0" ry="0" width="92" height="27" />
    <rect x="8" y="447" rx="21" ry="21" width="139" height="41" />
    <circle cx="274" cy="423" r="11" />
    <rect x="151" y="447" rx="21" ry="21" width="139" height="41" />
  </ContentLoader>
);

export default MyLoader;
