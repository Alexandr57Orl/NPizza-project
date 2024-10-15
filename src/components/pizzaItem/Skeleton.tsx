import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="73" cy="89" r="58" />
    <circle cx="125" cy="125" r="125" />
    <rect x="93" y="29" rx="0" ry="0" width="63" height="3" />
    <rect x="0" y="299" rx="10" ry="10" width="280" height="32" />
    <rect x="2" y="363" rx="10" ry="10" width="280" height="88" />
    <rect x="5" y="461" rx="10" ry="10" width="92" height="32" />
    <rect x="150" y="461" rx="16" ry="16" width="127" height="32" />
  </ContentLoader>
);

export default Skeleton;
