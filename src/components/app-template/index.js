import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import SiteNavbar from "./navbar";
import { Styles } from "./styles";
import ChatIcon from "../../assets/images/icons/chat.png";
import ContactUsPopup from "../contact-us-popup";
const AppTemplate = ({ pageTitle, parentTitle, navbar, footer, children, }) => {
    const appName = "Alfahad frontend test";
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef(null);
    const iconRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current &&
                !popupRef.current.contains(event.target) &&
                iconRef.current &&
                !iconRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (_jsxs(Styles, { children: [pageTitle && (_jsx(Helmet, { children: _jsx("title", { children: parentTitle ? parentTitle + " " : pageTitle + " | " + appName }) })), navbar && _jsx(SiteNavbar, {}), _jsx("div", { className: "main-data", children: children }), footer && _jsx(Footer, {}), _jsxs("div", { className: "chat", children: [isOpen && (_jsx("div", { ref: popupRef, children: _jsx(ContactUsPopup, { setIsOpen: setIsOpen }) })), _jsx("div", { className: "chat-icon", ref: iconRef, onClick: () => {
                            setIsOpen(true);
                        }, children: _jsx("img", { src: ChatIcon, alt: "chat" }) })] })] }));
};
export default AppTemplate;
