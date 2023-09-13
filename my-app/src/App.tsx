import * as React from "react";
import { Button, InteractiveStateLayer, Text, ThemeProvider, useTheme } from "../../index";
import { css } from "@emotion/css";
import {Icon} from "@mdi/react";
import { mdiHeart } from "@mdi/js";
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
	const { updateSourceColor, scheme } = useTheme();
	return (
		<div className={css`
		display:flex;
		gap: 16px;
		`}>
			<Button
			type="tonal"
				onClick={() => {
					updateSourceColor("#4400ee");
				}}
			>
				Set Blue
			</Button>
			<Button
			type="outline"
				onClick={() => {
					updateSourceColor("#44ee00");
				}}
			>
				Set Green
			</Button>
			<Button
				onClick={() => {
					updateSourceColor("#ee4400");
				}}
				icon={mdiHeart}
			>
				Set Red
			</Button>
			<Button
				disabled
				onClick={()=>{alert("Ok!")}}
			>
				Text
			</Button>
			<Text type="headlineMedium">
				Abcadło
			</Text>
			<Icon size='24px' path={mdiHeart}/>
		</div>
	);
}
