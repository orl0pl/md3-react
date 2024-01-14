// ThemeContext.js
import { argbFromHex } from "@material/material-color-utilities";
import React, { createContext, useContext, useEffect, useState } from "react";
import { themeFromSourceColor, Scheme, applyTheme } from "mcu-extra";
import {Theme} from "mcu-extra";

interface IThemeContext {
	mode: "light" | "dark";
	sourceColor: string;
	toggleMode: (mode?: "light" | "dark") => void;
	updateSourceColor: (newColor: string) => void;
	scheme: Scheme;
}

const defaultValues: IThemeContext = {
	mode: "light",
	sourceColor: "#4400ee",
	scheme: themeFromSourceColor(argbFromHex("#4400ee")).schemes["light"],
	toggleMode: function (): void {},
	updateSourceColor: function (newColor: string): void {},
};
const ThemeContext = createContext(defaultValues);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [mode, setMode] = useState<"light" | "dark">("light");
	const [sourceColor, setSourceColor] = useState("#4400ee");
	const [scheme, setscheme] = useState(
		themeFromSourceColor(argbFromHex("#4400ee"), []).schemes["light"]
	); // Store the generated theme colors here
	const [theme, setTheme] = useState<Theme>(
		themeFromSourceColor(argbFromHex("#4400ee"), [])
	)
	

	const toggleMode = (utheme?: "light" | "dark") => {
		setMode(utheme ? utheme : (prevTheme) => (prevTheme === "light" ? "dark" : "light"));
		setscheme(
			theme.schemes[
				utheme ? utheme : mode === "light" ? "dark" : "light"
			]
		);
	};

	const updateSourceColor = (newColor: string) => {
		setSourceColor(newColor);
		const generatedTheme = themeFromSourceColor(argbFromHex(newColor), []);
		setscheme(generatedTheme.schemes[mode]);
	};

	useEffect(()=>{
		if(document !== undefined) {
			if (document.body !== undefined) {
				applyTheme(theme, {target: document.body, dark: mode === "dark"});
			}
		}
	}, [])

	return (
		<ThemeContext.Provider value={{ mode, toggleMode, sourceColor, updateSourceColor, scheme }}>
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
