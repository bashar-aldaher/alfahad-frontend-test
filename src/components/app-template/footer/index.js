import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Styles } from "./styles";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import FacebookImage from "../../../assets/images/footer/facebook.png";
import InstagramImage from "../../../assets/images/footer/instagram.png";
import LinkedinImage from "../../../assets/images/footer/linkedin.png";
const Footer = () => {
    return (_jsx(Styles, { children: _jsxs("footer", { className: "inner-section", children: [_jsxs(Container, { children: [_jsxs("div", { className: "info", children: [_jsx("div", { className: "logo", children: "lOGO" }), _jsx("div", { className: "description", children: "Lorem ipsum dolor sit amet consectetur. Fermentum tellus amet egestas eu nisi ultricies euismod varius Lorem ipsum dolor sit amet consectetur. Fermentum tellus amet egestas eu nisi ultricies euismod varius. Lorem ipsum dolor sit amet consectetur. Fermentum tellus amet egestas eu nis" })] }), _jsxs("div", { className: "data", children: [_jsxs("div", { className: "item", children: [_jsx("div", { className: "title", children: "Quick Links" }), _jsx(Link, { to: "/", children: "Home" }), _jsx(Link, { to: "/ads", children: "Ads" }), _jsx(Link, { to: "/products", children: "Product" })] }), _jsxs("div", { className: "item", children: [_jsx("div", { className: "title", children: "Additional Links" }), _jsx(Link, { to: "/", children: "Privacy policy" }), _jsx(Link, { to: "/", children: "Terms of Use" })] }), _jsxs("div", { className: "item", children: [_jsx("div", { className: "title", children: "Contact Us" }), _jsxs("a", { href: "tel:(+45)54455487845", children: [_jsx(BiPhone, {}), "(+45)54455487845"] }), _jsxs("a", { href: "mailto:info-comany.com", children: [_jsx(MdOutlineEmail, {}), "info-comany.com"] }), _jsxs("a", { children: [_jsx(SlLocationPin, {}), "Our Fritz Road 3,44649 Herne", " "] })] }), _jsxs("div", { className: "item", children: [_jsx("div", { className: "title", children: "Find Us " }), _jsxs("div", { className: "social-links", children: [_jsx("a", { children: _jsx("img", { src: FacebookImage, alt: "facebook" }) }), _jsx("a", { children: _jsx("img", { src: InstagramImage, alt: "facebook" }) }), _jsx("a", { children: _jsx("img", { src: LinkedinImage, alt: "facebook" }) })] })] })] })] }), _jsx("div", { className: "copyright", children: "All Rights Reseved in 2024" })] }) }));
};
export default Footer;
