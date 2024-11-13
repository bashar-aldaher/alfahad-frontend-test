import React from "react";
interface CustomBtnProps {
    text: string;
    onClickFn?: () => void;
    link?: string;
    isExternal?: boolean;
    id?: string;
    isDisabled?: boolean;
    type?: "button" | "submit" | "reset";
    width?: string;
    firstColor?: string;
    secondColor?: string;
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    paddingTop?: string;
    paddingBottom?: string;
    fontSize?: string;
    borderRadius?: string;
}
declare const CustomBtn: React.FC<CustomBtnProps>;
export default CustomBtn;
