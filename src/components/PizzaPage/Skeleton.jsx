import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={400}
    viewBox="0 0 300 400"
    backgroundColor="#e8e8e8"
    foregroundColor="#e0e0e0"
    {...props}>
    <circle cx="152" cy="221" r="143" />
    <rect x="20" y="13" rx="0" ry="0" width="269" height="46" />
    <rect x="95" y="370" rx="0" ry="0" width="117" height="32" />
  </ContentLoader>
);

export default MyLoader;
