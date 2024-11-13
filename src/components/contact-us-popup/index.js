import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Styles } from "./styles";
import avatar from "../../assets/images/icons/avatar.png";
import { Form } from "react-bootstrap";
import { IoIosSend, IoMdCloseCircleOutline } from "react-icons/io";
const ContactUsPopup = ({ setIsOpen }) => {
    const [message, setMessage] = useState("");
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            // Logic to send the message goes here
            setMessage(""); // Clear the input after sending
        }
    };
    return (_jsxs(Styles, { children: [_jsxs("div", { className: "header", children: [_jsxs("div", { className: "user", children: [_jsx("div", { className: "avatar", children: _jsx("img", { src: avatar, alt: "username" }) }), _jsxs("div", { className: "user-data", children: [_jsx("div", { className: "name", children: "John Doe" }), _jsxs("div", { className: "status", children: [_jsx("div", { className: "status-point" }), "active"] })] })] }), _jsx("button", { className: "close", onClick: () => setIsOpen(false), "aria-label": "Close chat popup", children: _jsx(IoMdCloseCircleOutline, {}) })] }), _jsxs("div", { className: "messages", children: [_jsxs("div", { className: "message-container incoming-message", children: [_jsx("div", { className: "user", children: _jsx("img", { src: avatar, alt: "username" }) }), _jsx("div", { className: "data", children: _jsx("div", { className: "message", children: "Lorem ipsum dolor sit a aenean ut euismod at integer id nulla cursus te" }) })] }), _jsxs("div", { className: "message-container outcoming-message", children: [_jsx("div", { className: "user", children: _jsx("img", { src: avatar, alt: "username" }) }), _jsx("div", { className: "data", children: _jsx("div", { className: "message", children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, tenetur!" }) })] }), _jsxs("div", { className: "message-container incoming-message", children: [_jsx("div", { className: "user", children: _jsx("img", { src: avatar, alt: "username" }) }), _jsx("div", { className: "data", children: _jsx("div", { className: "message", children: "Lorem ipsum dolor sit a aenean ut euismod at integer id nulla cursus te" }) })] }), _jsxs("div", { className: "message-container outcoming-message", children: [_jsx("div", { className: "user", children: _jsx("img", { src: avatar, alt: "username" }) }), _jsx("div", { className: "data", children: _jsx("div", { className: "message", children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, tenetur!" }) })] })] }), _jsx("div", { className: "footer", children: _jsxs(Form, { onSubmit: handleSendMessage, children: [_jsx(Form.Control, { name: "message", placeholder: "Type a message", value: message, onChange: (e) => setMessage(e.target.value) }), _jsx("button", { type: "submit", className: "send", "aria-label": "Send message", children: _jsx(IoIosSend, {}) })] }) })] }));
};
export default ContactUsPopup;
