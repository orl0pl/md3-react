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
declare function LayoutWithNavigationBar(props: LayoutWithNavigationOptions): React.JSX.Element;
export { LayoutWithNavigationBar };
