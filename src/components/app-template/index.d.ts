import React from "react";
type AppTemplateProps = {
    pageTitle: String;
    parentTitle?: String;
    navbar?: boolean;
    footer?: boolean;
    children: React.ReactNode;
};
declare const AppTemplate: ({ pageTitle, parentTitle, navbar, footer, children, }: AppTemplateProps) => import("react/jsx-runtime").JSX.Element;
export default AppTemplate;
