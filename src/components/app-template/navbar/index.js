import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Styles } from "./styles";
import { Link, useLocation } from "react-router-dom";
import CustomBtn from "../../common/buttons/CustomBtn";
import { navbarTabs } from "./navbar-tabs";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
const SiteNavbar = () => {
    const location = useLocation();
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
    const handleToggle = () => {
        setIsNavbarExpanded(!isNavbarExpanded);
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setIsNavbarExpanded(false);
            }
        };
        window.addEventListener("resize", handleResize);
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (_jsx(Styles, { children: _jsxs(Navbar, { expand: "lg", className: isNavbarExpanded ? "active" : "", onToggle: handleToggle, expanded: isNavbarExpanded, children: [_jsx("div", { className: "logo", children: "lOGO" }), _jsx(Navbar.Toggle, { "aria-controls": "navbar-nav", onClick: handleToggle }), _jsx(Navbar.Collapse, { id: "navbar-nav", children: _jsxs(Nav, { children: [_jsx("div", { className: "tabs", children: navbarTabs?.map((item, idx) => (_jsx(Link, { to: item?.link, className: `hover-link ${location.pathname === item?.link ? "active" : ""}`, children: item?.name }, idx))) }), _jsx("div", { className: "login", children: _jsx(CustomBtn, { text: "Login", width: "110px" }) })] }) })] }) }));
};
export default SiteNavbar;
