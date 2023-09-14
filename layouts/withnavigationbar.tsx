import { css } from "@emotion/css";
import { hexFromArgb } from "@material/material-color-utilities";
import {
	Button,
	InteractiveStateLayer,
	NavigationBar,
	Text,
	ThemeProvider,
	useTheme,
} from "../index";
import React, { useState } from "react";
import {
	mdiCompass,
	mdiCompassOutline,
	mdiHeart,
	mdiHome,
	mdiHomeOutline,
	mdiListBox,
	mdiListBoxOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
interface Segment {
	icon: string;
	inActiveIcon?: string;
	label?: string;
}

interface LayoutWithNavigationOptions {
	segments: Segment[],
	children: React.ReactElement[]//React.ReactNode
}

function LayoutWithNavigationBar(props: LayoutWithNavigationOptions) {
	const { updateSourceColor, scheme, toggleTheme } = useTheme();
	const [selected, setSelected] = useState(0)
	const [isCompact, setIsCompact] = useState(window.matchMedia("(max-width: 600px)").matches);
	const handler = (e: MediaQueryListEvent) => setIsCompact(e.matches);
	window.matchMedia("(max-width: 600px)").addEventListener("change", handler);
	return (
		<div
			className={css`
				background-color: ${hexFromArgb(scheme.background)};
				flex: 1;
				display: flex;
				flex-direction: ${isCompact ? "column-reverse" : "row"};
				gap: 12px;
			`}
		>
			<NavigationBar handleSelected={(i)=>{setSelected(i)}} horizontal={isCompact ? false : true} segments={props.segments}/>
			<main className={css`flex: 1; display: flex; flex-wrap:wrap; background-color: ${hexFromArgb(scheme.background)};`}>{props.children === undefined ? null : props.children[selected]}</main>
		</div>
	);
}

export { LayoutWithNavigationBar };
