import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Styles } from "./styles";
import Skeleton from "react-loading-skeleton";
const DynamicCardLoader = () => {
    return (_jsx(Styles, { children: _jsxs("div", { className: "skeleton-loader", children: [_jsx("div", { className: "img-container skeleton", children: _jsx(Skeleton, { containerClassName: "img-container", height: "190px" }) }), _jsxs("div", { className: "data", children: [_jsx("div", { className: "title skeleton", children: _jsx(Skeleton, {}) }), _jsx("div", { className: "description", children: _jsx(Skeleton, { count: 4 }) })] })] }) }));
};
export default DynamicCardLoader;
