import { Styles } from "./styles";
import Skeleton from "react-loading-skeleton";

const DynamicCardLoader = () => {
  return (
    <Styles>
      <div className="skeleton-loader">
        <div className="img-container skeleton">
          <Skeleton
            containerClassName="img-container"
            height={"190px"}
          />
        </div>
        <div className="data">
          <div className="title skeleton">
            <Skeleton />
          </div>
          <div className="description">
            <Skeleton count={4} />
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default DynamicCardLoader;
