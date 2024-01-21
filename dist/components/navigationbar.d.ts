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
declare const NavigationBar: (props: HTMLAttributes<HTMLElement> & NavigationBarOptions) => React.JSX.Element;
export { NavigationBar };
