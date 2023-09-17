declare module 'md3-react'
{
	export * from './componets';

	export * from './buttons';

	import React from 'react';
	interface ButtonProps {
	    title: string;
	}
	export default function Button({ title }: ButtonProps): React.JSX.Element;
	export {};

	export * from './Button';

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