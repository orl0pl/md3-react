import React, { CSSProperties, HTMLAttributes } from "react";
import { ColorSurface, InteractiveStateLayer, Text, m3Scheme } from "..";
import { Scheme, hexFromArgb } from "@material/material-color-utilities";
import { css } from "@emotion/css";
// import { InteractiveStateLayer } from "../surface/interactive";
// import { ColorSurface } from "./surfaces";
// import {Text} from '../components/Text'

interface ButtonOptions {
	color?: keyof Scheme;
	type?: string;
}

const Button = (props: HTMLAttributes<HTMLButtonElement> & ButtonOptions) => {
	return (
		<button
			className={css`
                all: unset; 
				max-width: fit-content;
				height: 40px;
				display: flex;
				border-radius: 999px;
                background-color: ${hexFromArgb(m3Scheme["primary"] as number)};
			`}
		>
			{/* <button
				className={css`
					all: unset;
					
				`}
				
			>
				<Text color="onPrimary">{props.children}</Text>
			</button> */}
			<div
				className={css`
					padding: 0px 24px;
					transition: background-color 300ms;
                    display: flex;
                    align-items: center;
					button:active & {
						background-color: ${hexFromArgb(m3Scheme["onPrimary"] as number) + (12 * 256).toString(16).replace(".", "").padStart(2, "0").slice(0, 2)};
					}
					button:hover & {
						background-color: ${hexFromArgb(m3Scheme["onPrimary"] as number) + (8 * 256).toString(16).replace(".", "").padStart(2, "0").slice(0, 2)};
					}
					button:focus-visible & {
						background-color: ${hexFromArgb(m3Scheme["onPrimary"] as number) + (12 * 256).toString(16).replace(".", "").padStart(2, "0").slice(0, 2)};
					}
                    
				`}
			>
               <Text color="onPrimary">{props.children}</Text> 
            </div>
		</button>
	);
};

export { Button };
