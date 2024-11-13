import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductsSlider from "./products-slider";
import { getAllProductsApi } from "../../../services/products.service";
import ProductBg from "../../../assets/images/home/productBg.png";
import { Styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../store/slices/productSlice";
const Products = () => {
    const dispatch = useDispatch();
    const ProductsData = useSelector((state) => state.product.products);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const getAllProducts = async () => {
        setIsLoading(true);
        const response = await getAllProductsApi();
        if (response?.status === 200) {
            const productsData = response.data;
            setData(productsData);
            dispatch(setProducts(productsData));
        }
        setIsLoading(false);
    };
    useEffect(() => {
        if (!ProductsData ||
            ProductsData?.data?.length === 0) {
            getAllProducts();
        }
        else {
            setData(ProductsData);
            setIsLoading(false);
        }
    }, [ProductsData]);
    return ((isLoading || (data && data.data && data.data.length > 0)) && (_jsx(Styles, { children: _jsxs("section", { className: "inner-section dark", children: [_jsx("div", { className: "section-bg", children: _jsx("img", { src: ProductBg, alt: "product" }) }), _jsxs(Container, { children: [_jsx("div", { className: "section-title", children: "Products" }), _jsx("div", { className: "section-description", children: _jsx("div", { className: "content", children: "Lorem ipsum dolor sit amet consectetur. Nulla aliquam nisl augue amet non elit vel purus. Auctor aenean ut euismod at integer id nulla cursus te" }) }), _jsx(ProductsSlider, { data: data ? data?.data : [], isLoading: isLoading })] })] }) })));
};
export default memo(Products);
