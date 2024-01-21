import React, { HTMLAttributes } from "react";
import { Scheme } from "@material/material-color-utilities";
type TextType = "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall";
interface TextOptions {
    color?: keyof Scheme;
    type?: TextType;
}
export declare function textStylesForType(type: TextType): string;
declare const Text: ({ ...props }: HTMLAttributes<HTMLSpanElement> & TextOptions) => React.JSX.Element;
export { Text };
