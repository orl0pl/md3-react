declare module 'md3-react'
{
	export * from './components/themeProvider';
	export * from './components/surfaces';
	export * from './components/buttons';
	export * from './components/text';
	export * from './components/navigationbar';
	export * from './layouts/withnavigationbar';

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

	import React, { HTMLAttributes } from 'react';
	import { Scheme } from '@material/material-color-utilities';
	interface InteractiveStateLayerOptions {
	    layerColorName: keyof Scheme;
	    layerOpacity: number;
	}
	interface ColorSurfaceOptions {
	    colorName: keyof Scheme;
	}
	const InteractiveStateLayer: ({ ...props }: HTMLAttributes<HTMLDivElement> & InteractiveStateLayerOptions) => React.JSX.Element;
	const ColorSurface: ({ ...props }: HTMLAttributes<HTMLDivElement> & ColorSurfaceOptions) => React.JSX.Element;
	export { InteractiveStateLayer, ColorSurface };

	import React, { HTMLAttributes } from "react";
	import { Scheme } from "@material/material-color-utilities";
	type TextType = "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall";
	interface TextOptions {
	    color?: keyof Scheme;
	    type?: TextType;
	}
	export function textStylesForType(type: TextType): string;
	const Text: ({ ...props }: HTMLAttributes<HTMLSpanElement> & TextOptions) => React.JSX.Element;
	export { Text };

	import React from "react";
	import { Scheme } from "mcu-extra";
	interface IThemeContext {
	    mode: "light" | "dark";
	    sourceColor: string;
	    toggleMode: (mode?: "light" | "dark") => void;
	    updateSourceColor: (newColor: string) => void;
	    scheme: Scheme;
	}
	export function ThemeProvider({ children }: {
	    children: React.ReactNode;
	}): React.JSX.Element;
	export function useTheme(): IThemeContext;
	export {};

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

}