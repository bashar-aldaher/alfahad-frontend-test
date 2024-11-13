import { Styles } from "./styles";
import { Link } from "react-router-dom";
import { HiArrowSmallRight } from "react-icons/hi2";
import { memo } from "react";

type DynamicCardProps = {
  data: any;
  type?: string;
};

const DynamicCard = ({ data, type }: DynamicCardProps) => {
  const { id, image, name, description, title, content, price, categories } =
    data?.data || {};

  return (
    <Styles>
      <Link to={type === "ad" ? `/ad/${id}` : `/product/${id}`}>
        <div className="img-container">
          {image && (
            <img
              src={image}
              alt={type === "ad" ? content : description || "card"}
            />
          )}
        </div>
        <div className="data">
          <div className="title">
            {type === "ad" ? title : name}
            <div className="link">
              <HiArrowSmallRight />
            </div>
          </div>
          <div
            className={`description ${
              type === "product" ? "product-description" : ""
            }`}
          >
            {type === "ad" ? content : description}
          </div>
          {type === "product" && (
            <>
              <div className="price">{price}</div>
              <div className="category">category: {categories?.name}</div>
              <div className="category">{categories?.description}</div>
            </>
          )}
        </div>
      </Link>
    </Styles>
  );
};

export default memo(DynamicCard);
