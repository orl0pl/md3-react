import React from "react";
import { Scheme } from "mcu-extra";
interface IThemeContext {
    mode: "light" | "dark";
    sourceColor: string;
    toggleMode: (mode?: "light" | "dark") => void;
    updateSourceColor: (newColor: string) => void;
    scheme: Scheme;
}
export declare function ThemeProvider({ children }: {
    children: React.ReactNode;
}): React.JSX.Element;
export declare function useTheme(): IThemeContext;
export {};
