declare module 'md3-react'
{
	export * from './components';
	export * from './layouts';
	export * from './utils/ThemeProvider';

	export * from './buttons';
	export * from './text';
	export * from './navigation';

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
	interface Segment {
	    icon: string;
	    inActiveIcon?: string;
	    label?: string;
	}
	interface NavigationBarOptions {
	    horizontal?: boolean;
	    segments: Segment[];
	    handleSelected?: (index: number) => void;
	}
	const NavigationBar: (props: HTMLAttributes<HTMLElement> & NavigationBarOptions) => React.JSX.Element;
	export { NavigationBar };

	export * from './NavigationBar';

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
	interface Segment {
	    icon: string;
	    inActiveIcon?: string;
	    label?: string;
	}
	interface LayoutWithNavigationOptions {
	    segments: Segment[];
	    children: React.ReactElement[] | React.ReactElement;
	}
	function LayoutWithNavigationBar(props: LayoutWithNavigationOptions): React.JSX.Element;
	export { LayoutWithNavigationBar };

	export * from './WithNavigationBar';

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