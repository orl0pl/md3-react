import React, { CSSProperties, HTMLAttributes } from "react";
import { ColorSurface, InteractiveStateLayer, Text, useTheme } from "..";
import { Scheme, hexFromArgb } from "@material/material-color-utilities";
import { css } from "@emotion/css";

interface ButtonOptions {
	color?: keyof Scheme;
	type?: string;
}

const Button = (props: HTMLAttributes<HTMLButtonElement> & ButtonOptions) => {
    const {scheme} = useTheme()
    const {color, type,...buttonProps} = props
    const StateLayerStyle = css`
    padding: 0px 24px;
    transition: background-color 300ms;
    display: flex;
    align-items: center;
    button:active & {
        background-color: ${hexFromArgb(scheme["onPrimary"] as number) +
        (12 * 256).toString(16).replace(".", "").padStart(2, "0").slice(0, 2)};
    }
    button:hover & {
        background-color: ${hexFromArgb(scheme["onPrimary"] as number) +
        (8 * 256).toString(16).replace(".", "").padStart(2, "0").slice(0, 2)};
    }
    button:focus-visible & {
        background-color: ${hexFromArgb(scheme["onPrimary"] as number) +
        (12 * 256).toString(16).replace(".", "").padStart(2, "0").slice(0, 2)};
    }
`
	return (
		<button
			className={css`
				all: unset;
				max-width: fit-content;
				height: 40px;
				display: flex;
				border-radius: 999px;
				background-color: ${hexFromArgb(scheme["primary"] as number)};
			`}
            {...buttonProps}
		>
			<div
				className={StateLayerStyle}
			>
				<Text color="onPrimary">{props.children}</Text>
			</div>
		</button>
	);
};

export { Button };
