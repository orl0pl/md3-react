import React, { HTMLAttributes, ReactElement } from "react";
import { m3Scheme } from "..";
import { Scheme, hexFromArgb } from "@material/material-color-utilities";
import { css } from "@emotion/css";

interface TextOptions {
	color?: keyof Scheme;
	type?: string;
}

const Text = ({ ...props }: HTMLAttributes<HTMLSpanElement> & TextOptions) => {
	const { color, type, children, ...spanProps } = props;
	console.log(hexFromArgb(m3Scheme['primary'] as number))
	return (
		<>
			<span
				className={css`
					//color: #${m3Scheme[color || "onBackground"].toString(16).slice(0, -2)};
                    color: ${hexFromArgb(m3Scheme[color || "onBackground"] as number)}
				`}
				{...spanProps}
			>
				{children}
			</span>
		</>
	);
};

export { Text };
