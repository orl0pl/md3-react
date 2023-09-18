import { argbFromHex } from "@material/material-color-utilities";
import React, { createContext, useContext, useEffect, useState } from "react";
import { themeFromSourceColor, Scheme } from "mcu-extra";

interface IThemeContext {
	theme: "light" | "dark";
	sourceColor: string;
	toggleTheme: (theme?: "light" | "dark") => void;
	updateSourceColor: (newColor: string) => void;
	scheme: Scheme;
}

const defaultValues: IThemeContext = {
	theme: "light",
	sourceColor: "#4400ee",
	scheme: themeFromSourceColor(argbFromHex("#4400ee")).schemes["light"],
	toggleTheme: function (): void {},
	updateSourceColor: function (newColor: string): void {},
};
const ThemeContext = createContext(defaultValues);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<"light" | "dark">("light");
	const [sourceColor, setSourceColor] = useState("#4400ee");
	const [toggleTheme, setToggleFun] = useState<(theme?: "light" | "dark") => void>(()=>{})
	const [updateSourceColor, setColorFun] = useState<(newColor: string) => void>(()=>{})
	const [scheme, setscheme] = useState(
		themeFromSourceColor(argbFromHex("#4400ee"), []).schemes["light"]
	); // Store the generated theme colors here

	

	useEffect(()=>{
		setToggleFun((utheme?: "light" | "dark") => {
			const newTheme = utheme !== undefined ? utheme : theme === "light" ? "dark" : "light";
			setTheme(newTheme);
			setscheme(
				themeFromSourceColor(argbFromHex(sourceColor), []).schemes[newTheme]
			)
		})
	
		setColorFun((newColor: string) => {
			setSourceColor(newColor);
			setscheme(themeFromSourceColor(argbFromHex(newColor), []).schemes[theme]);
		})
	})

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, sourceColor, updateSourceColor, scheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}
