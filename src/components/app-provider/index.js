import { jsx as _jsx } from "react/jsx-runtime";
import { SkeletonTheme } from "react-loading-skeleton";
const AppProvider = ({ children }) => {
    return (_jsx(SkeletonTheme, { baseColor: "#d8d8d8", highlightColor: "#f5f5f5", children: children }));
};
export default AppProvider;
