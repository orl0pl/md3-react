import React from "react";
import { Text, useTheme } from "../..";
import { Button } from "../..";
import { mdiHeart } from "@mdi/js";
import { css } from "@emotion/css";

export default function HomeScreen() {
	const { updateSourceColor, scheme, toggleTheme } = useTheme();
	return (
		<div className={css`display: flex; flex-direction: row; gap: 12px; flex-wrap: wrap;`}>
			<Text type="displayLarge">md3-react1</Text>
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
				onClick={() => {
					alert("Ok!");
				}}
			>
				Text
			</Button>
			<Button
				onClick={() => {
					toggleTheme();
				}}
			>
				Toogle theme
			</Button>
		</div>
	);
}
