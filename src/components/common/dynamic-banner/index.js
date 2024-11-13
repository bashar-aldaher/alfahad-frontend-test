import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Styles } from "./styles";
import { Container } from "react-bootstrap";
import HeaderBg from "../../../assets/images/banner/headerimg.jpg";
import Ellipse from "../../../assets/images/banner/Ellipse.png";
import CustomBtn from "../buttons/CustomBtn";
const DynamicBanner = () => {
    return (_jsxs(Styles, { children: [_jsx("div", { className: "bg-img", children: _jsx("img", { src: HeaderBg, alt: "header" }) }), _jsx("div", { className: "bg-shape", children: _jsx("img", { src: Ellipse, alt: "header" }) }), _jsx("header", { children: _jsxs(Container, { children: [_jsx("div", { className: "title", children: "Welcome to" }), _jsx("div", { className: "description", children: "Lorem ipsum dolor sit amet consectetur. Nulla aliquam nisl augue amet non elit vel purus. Auctor aenean ut euismod at integer id nulla cursus te" }), _jsx(CustomBtn, { text: "Contact Us" })] }) })] }));
};
export default DynamicBanner;
