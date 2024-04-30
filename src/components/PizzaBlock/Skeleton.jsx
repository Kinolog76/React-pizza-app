import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={300}
    height={535}
    viewBox="0 0 300 535"
    backgroundColor="#e8e8e8"
    foregroundColor="#e0e0e0"
    {...props}>
    <circle cx="150" cy="130" r="126" />
    <rect x="10" y="268" rx="0" ry="0" width="281" height="24" />
    <rect x="3" y="343" rx="11" ry="11" width="296" height="89" />
    <rect x="7" y="455" rx="0" ry="0" width="94" height="25" />
    <circle cx="279" cy="466" r="10" />
    <rect x="152" y="490" rx="22" ry="22" width="144" height="44" />
    <rect x="-1" y="491" rx="22" ry="22" width="144" height="44" />
  </ContentLoader>
);

export default MyLoader;
