import React from "react";
import { Text, useTheme } from "../..";
import { Button } from "../..";
import { mdiHeart } from "@mdi/js";

export default function HomeScreen() {
	const { updateSourceColor, scheme, toggleTheme } = useTheme();
	return (
		<>
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
		</>
	);
}
