import * as React from "react";
import { Button, InteractiveStateLayer, LayoutWithNavigationBar, NavigationBar, Text, ThemeProvider, useTheme } from "../../index";
import { css } from "@emotion/css";
import {Icon} from "@mdi/react";
import { mdiCompass, mdiCompassOffOutline, mdiCompassOutline, mdiHeart, mdiHome, mdiHomeOutline, mdiListBox, mdiListBoxOutline } from "@mdi/js";
import { hexFromArgb } from "@material/material-color-utilities";
export default () => (
	<>
		<ThemeProvider>
			<Component />
		</ThemeProvider>
		{/* <InteractiveStateLayer layerColorName="onPrimaryContainer" layerOpacity={0.16}>
			A{" "}
			<code>
				{`#${m3Scheme['onPrimaryContainer'].toString(16).slice(0, -2)}${(.16 * 256)
            .toString(16)
            .replace(".", "")
            .padStart(2, "0")
            .slice(0, 2)}`}
			</code>
		</InteractiveStateLayer> */}
	</>
);

function Component() {
	const { updateSourceColor, scheme, toggleTheme } = useTheme();
	return (
		// <div className={css`background-color: /*${hexFromArgb(scheme.background)}*/ #fff ; flex: 1; display: flex; flex-direction: column; gap: 12px;`}>
		// 	<div
		// 		className={css`
		// 			display: flex;
		// 			gap: 16px;
		// 			flex-wrap: wrap;
		// 		`}
		// 	>
		// 		<Button
		// 			type="tonal"
		// 			onClick={() => {
		// 				updateSourceColor("#4400ee");
		// 			}}
		// 		>
		// 			Set Blue
		// 		</Button>
		// 		<Button
		// 			type="outline"
		// 			onClick={() => {
		// 				updateSourceColor("#44ee00");
		// 			}}
		// 		>
		// 			Set Green
		// 		</Button>
		// 		<Button
		// 			onClick={() => {
		// 				updateSourceColor("#ee4400");
		// 			}}
		// 			icon={mdiHeart}
		// 		>
		// 			Set Red
		// 		</Button>
		// 		<Button
		// 			disabled
		// 			onClick={() => {
		// 				alert("Ok!");
		// 			}}
		// 		>
		// 			Text
		// 		</Button>
		// 		<Button
		// 			onClick={() => {
		// 				toggleTheme()
		// 			}}
		// 		>
		// 			Text
		// 		</Button>
		// 		<Text type="headlineMedium">Abcadło</Text>

		// 		<Icon size="24px" path={mdiHeart} />
		// 	</div>
		// 	<div style={{width: "100%", display: 'flex', resize: 'horizontal', border: '1px solid #888', overflow: 'hidden'}}>
		// 	<NavigationBar segments={[
		// 		{icon: mdiHome, label: "Dom", inActiveIcon: mdiHomeOutline},
		// 		{icon: mdiListBox, label: "Lista", inActiveIcon: mdiListBoxOutline},
		// 		{icon: mdiCompass, label: "Odkrywaj", inActiveIcon: mdiCompassOutline},
		// 	]} />
		// 	</div>
		// </div>
		<LayoutWithNavigationBar></LayoutWithNavigationBar>
	);
}
