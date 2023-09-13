import React, { CSSProperties, HTMLAttributes } from "react";
import { ColorSurface, InteractiveStateLayer, Text, textStylesForType, useTheme } from "..";
import { Scheme, hexFromArgb } from "@material/material-color-utilities";
import { css } from "@emotion/css";
import Icon from "@mdi/react";

type ButtonType = "filled" | "tonal" | "outline" | "text";

interface ButtonOptions {
	color?: keyof Scheme;
	type?: ButtonType;
	icon?: string;
	disabled?: boolean;
}

const Button = (props: HTMLAttributes<HTMLButtonElement> & ButtonOptions) => {
	const { scheme } = useTheme();
	const { color, type = "filled", icon, ...buttonProps } = props;
	const background =
		type === "filled"
			? hexFromArgb(scheme["primary"])
			: type === "tonal"
			? hexFromArgb(scheme["secondaryContainer"])
			: "transparent";
	const onbackground =
		type === "filled"
			? hexFromArgb(scheme["onPrimary"])
			: type === "tonal"
			? hexFromArgb(scheme["onSecondaryContainer"])
			: hexFromArgb(scheme["primary"]);
	const StateLayerStyle = css`
		padding: 0px 24px;
		transition: background-color 300ms;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		${icon && "padding-left: 16px;"}
		color: ${onbackground}${props.disabled &&
		Math.round(0.38 * 256 * 1)
			.toString(16)
			.padStart(2, "0")};
		${textStylesForType("labelLarge")}
		button:not(:disabled):hover & {
			background-color: ${onbackground +
			Math.round(0.08 * 256)
				.toString(16)
				.padStart(2, "0")};
		}
		button:not(:disabled):active & {
			background-color: ${onbackground +
			Math.round(0.12 * 256)
				.toString(16)
				.padStart(2, "0")};
		}
		button:not(:disabled):focus-visible & {
			background-color: ${onbackground +
			Math.round(0.12 * 256)
				.toString(16)
				.padStart(2, "0")};
		}
	`;
	return (
		<button
			className={css`
				all: unset;
				cursor: ${!props.disabled && 'pointer'};
				overflow: hidden;
				width: fit-content;
				height: 36px;
				display: flex;
				border-radius: 999px;
				background-color: ${background}${props.disabled &&
					Math.round(0.38 * 256)
						.toString(16)
						.padStart(2, "0")};
				${type === "outline" &&
				`border: ${hexFromArgb(scheme.outline)}${
					props.disabled ?
					Math.round(0.38 * 256)
						.toString(16)
						.padStart(2, "0")
						: ''
				} 1px solid `}
			`}
			{...buttonProps}
		>
			<div className={StateLayerStyle}>
				{icon && <Icon path={icon} size="18px" />}
				{props.children}
			</div>
		</button>
	);
};

export { Button };
