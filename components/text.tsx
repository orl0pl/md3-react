import React, { HTMLAttributes, ReactElement } from "react";
import { Scheme, hexFromArgb } from "@material/material-color-utilities";
import { css } from "@emotion/css";
import { useTheme } from "./themeProvider";

interface TextOptions {
	color?: keyof Scheme;
	type?: string;
}

const Text = ({ ...props }: HTMLAttributes<HTMLSpanElement> & TextOptions) => {
	const { color, type, children, ...spanProps } = props;
	const {scheme} = useTheme()
	console.log(hexFromArgb(scheme['primary'] as number))
	return (
		<>
			<span
				className={css`
					//color: #${scheme[color || "onBackground"].toString(16).slice(0, -2)};
                    color: ${hexFromArgb(scheme[color || "onBackground"] as number)}
				`}
				{...spanProps}
			>
				{children}
			</span>
		</>
	);
};

export { Text };
