declare module 'md3-react'
{
	export * from './components';
	export * from './utils/ThemeProvider';

	export * from './buttons';
	export * from './text';

	import { HTMLAttributes } from "react";
	import React from "react";
	type ButtonType = "filled" | "tonal" | "outline" | "text";
	interface ButtonOptions {
	    type?: ButtonType;
	    icon?: string;
	    disabled?: boolean;
	}
	const Button: (props: HTMLAttributes<HTMLButtonElement> & ButtonOptions) => React.JSX.Element;
	export { Button };

	export * from './Button';

	import React, { HTMLAttributes } from "react";
	import { Scheme } from "@material/material-color-utilities";
	import { TextType } from "../../index";
	interface TextOptions {
	    color?: keyof Scheme;
	    type?: TextType;
	}
	const Text: ({ ...props }: HTMLAttributes<HTMLSpanElement> & TextOptions) => React.JSX.Element;
	export { Text };

	export * from './Text';
	export * from './typography';

	export const typographySet: ITypographySet;
	export function textStylesForType(type: TextType): string;
	export type TextType = "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall";
	export type ITypographySet = {
	    [key in TextType]: {
	        lineHeight: number;
	        fontSize: number;
	        letterSpacing: number;
	        fontWeight: number;
	    };
	};

	import React from "react";
	import { Scheme } from "mcu-extra";
	interface IThemeContext {
	    theme: "light" | "dark";
	    sourceColor: string;
	    toggleTheme: (theme?: "light" | "dark") => void;
	    updateSourceColor: (newColor: string) => void;
	    scheme: Scheme;
	}
	export function ThemeProvider({ children }: {
	    children: React.ReactNode;
	}): React.JSX.Element;
	export function useTheme(): IThemeContext;
	export {};

}