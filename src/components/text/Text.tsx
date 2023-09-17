import React, { HTMLAttributes, ReactElement } from "react";
import { Scheme, hexFromArgb } from "@material/material-color-utilities";
import { css } from "@emotion/css";
import { useTheme } from "./themeProvider";
import { TextType, textStylesForType } from "../../index";

interface TextOptions {
	color?: keyof Scheme;
	type?: TextType;
}


const Text = ({ ...props }: HTMLAttributes<HTMLSpanElement> & TextOptions) => {
	const { color, type, children, ...spanProps } = props;
	const { scheme } = useTheme();
	return (
		<>
			<span
				className={css`
					//color: #${scheme[color || "onBackground"].toString(16).slice(0, -2)};
					color: ${hexFromArgb(scheme[color || "onBackground"] as number)};
					${textStylesForType(type || "bodyMedium")}
				`}
				{...spanProps}
			>
				{children}
			</span>
		</>
	);
};

export { Text };
