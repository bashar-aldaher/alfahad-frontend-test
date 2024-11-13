import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store";
import "./assets/styles/index.css";
import environment from './environment.ts';
const MainApp = () => {
    console.log(environment.API_URL);
    return (_jsx(Provider, { store: store, children: _jsx(App, {}) }));
};
createRoot(document.getElementById("root")).render(_jsx(MainApp, {}));
