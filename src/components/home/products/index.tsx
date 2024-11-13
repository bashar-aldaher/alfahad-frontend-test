import { memo, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductsSlider from "./products-slider";
import { getAllProductsApi } from "../../../services/products.service";
import ProductBg from "../../../assets/images/home/productBg.png";
import { Styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../store/slices/productSlice";
import { RootState } from "../../../store";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  categories: {
    name: string;
    description: string;
  };
}

interface ProductsApiResponse {
  data: Product[];
}

const Products = () => {
  const dispatch = useDispatch();
  const ProductsData = useSelector(
    (state: RootState) => state.product.products
  );

  const [data, setData] = useState<ProductsApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getAllProducts = async () => {
    setIsLoading(true);
    const response = await getAllProductsApi();
    if (response?.status === 200) {
      const productsData = response.data as ProductsApiResponse;
      setData(productsData);
      dispatch(setProducts(productsData));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (
      !ProductsData ||
      (ProductsData as ProductsApiResponse)?.data?.length === 0
    ) {
      getAllProducts();
    } else {
      setData(ProductsData as ProductsApiResponse);
      setIsLoading(false);
    }
  }, [ProductsData]);

  return (
    (isLoading || (data && data.data && data.data.length > 0)) && (
      <Styles>
        <section className="inner-section dark">
          <div className="section-bg" >
            <img src={ProductBg} alt="product" />
          </div>
          <Container>
            <div className="section-title">Products</div>
            <div className="section-description">
              <div className="content">
                Lorem ipsum dolor sit amet consectetur. Nulla aliquam nisl augue
                amet non elit vel purus. Auctor aenean ut euismod at integer id
                nulla cursus te
              </div>
            </div>
            <ProductsSlider
              data={data ? data?.data : []}
              isLoading={isLoading}
            />
          </Container>
        </section>
      </Styles>
    )
  );
};

export default memo(Products);
