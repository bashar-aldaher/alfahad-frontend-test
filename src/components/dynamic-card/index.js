import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Styles } from "./styles";
import { Link } from "react-router-dom";
import { HiArrowSmallRight } from "react-icons/hi2";
import { memo } from "react";
const DynamicCard = ({ data, type }) => {
    const { id, image, name, description, title, content, price, categories } = data?.data || {};
    return (_jsx(Styles, { children: _jsxs(Link, { to: type === "ad" ? `/ad/${id}` : `/product/${id}`, children: [_jsx("div", { className: "img-container", children: image && (_jsx("img", { src: image, alt: type === "ad" ? content : description || "card" })) }), _jsxs("div", { className: "data", children: [_jsxs("div", { className: "title", children: [type === "ad" ? title : name, _jsx("div", { className: "link", children: _jsx(HiArrowSmallRight, {}) })] }), _jsx("div", { className: `description ${type === "product" ? "product-description" : ""}`, children: type === "ad" ? content : description }), type === "product" && (_jsxs(_Fragment, { children: [_jsx("div", { className: "price", children: price }), _jsxs("div", { className: "category", children: ["category: ", categories?.name] }), _jsx("div", { className: "category", children: categories?.description })] }))] })] }) }));
};
export default memo(DynamicCard);
