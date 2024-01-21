import React, { HTMLAttributes } from 'react';
import { Scheme } from 'mcu-extra';
import { Scheme as Scheme$1 } from '@material/material-color-utilities';

interface IThemeContext {
    mode: "light" | "dark";
    sourceColor: string;
    toggleMode: (mode?: "light" | "dark") => void;
    updateSourceColor: (newColor: string) => void;
    scheme: Scheme;
}
declare function ThemeProvider({ children }: {
    children: React.ReactNode;
}): React.JSX.Element;
declare function useTheme(): IThemeContext;

interface InteractiveStateLayerOptions {
    layerColorName: keyof Scheme$1;
    layerOpacity: number;
}
interface ColorSurfaceOptions {
    colorName: keyof Scheme$1;
}
declare const InteractiveStateLayer: ({ ...props }: HTMLAttributes<HTMLDivElement> & InteractiveStateLayerOptions) => React.JSX.Element;
declare const ColorSurface: ({ ...props }: HTMLAttributes<HTMLDivElement> & ColorSurfaceOptions) => React.JSX.Element;

type ButtonType = "filled" | "tonal" | "outline" | "text";
interface ButtonOptions {
    type?: ButtonType;
    icon?: string;
    disabled?: boolean;
}
declare const Button: (props: HTMLAttributes<HTMLButtonElement> & ButtonOptions) => React.JSX.Element;

type TextType = "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall";
interface TextOptions {
    color?: keyof Scheme$1;
    type?: TextType;
}
declare function textStylesForType(type: TextType): string;
declare const Text: ({ ...props }: HTMLAttributes<HTMLSpanElement> & TextOptions) => React.JSX.Element;

interface Segment$1 {
    icon: string;
    inActiveIcon?: string;
    label?: string;
}
interface NavigationBarOptions {
    horizontal?: boolean;
    segments: Segment$1[];
    handleSelected?: (index: number) => void;
}
declare const NavigationBar: (props: HTMLAttributes<HTMLElement> & NavigationBarOptions) => React.JSX.Element;

interface Segment {
    icon: string;
    inActiveIcon?: string;
    label?: string;
}
interface LayoutWithNavigationOptions {
    segments: Segment[];
    children: React.ReactElement[] | React.ReactElement;
}
declare function LayoutWithNavigationBar(props: LayoutWithNavigationOptions): React.JSX.Element;

export { Button, ColorSurface, InteractiveStateLayer, LayoutWithNavigationBar, NavigationBar, Text, ThemeProvider, textStylesForType, useTheme };
