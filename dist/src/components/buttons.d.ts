import { HTMLAttributes } from "react";
import React from "react";
type ButtonType = "filled" | "tonal" | "outline" | "text";
interface ButtonOptions {
    type?: ButtonType;
    icon?: string;
    disabled?: boolean;
}
declare const Button: (props: HTMLAttributes<HTMLButtonElement> & ButtonOptions) => React.JSX.Element;
export { Button };
