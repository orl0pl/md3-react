import React from "react";
import { Text, useTheme } from "../..";
import { Button } from "../..";
import { mdiHeart } from "@mdi/js";
import { css } from "@emotion/css";

export default function ListScreen() {
	const { updateSourceColor, scheme, toggleTheme } = useTheme();
	return (
		<div className={css`display: flex; flex-direction: row; gap: 12px; flex-wrap: wrap;`}>
			<Text>List</Text>
			
		</div>
	);
}
