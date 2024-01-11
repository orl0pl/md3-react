import React, { HTMLAttributes, useState } from "react";
import { Text, useTheme } from "..";
import { hexFromArgb } from "@material/material-color-utilities";
import { css } from "@emotion/css";
import Icon from "@mdi/react";

interface NavigationBarSegmentOptions {
	activated?: boolean;
	icon: string;
	inActiveIcon?: string;
	label?: string;
	horizontal?: boolean;
}

interface Segment {
	icon: string;
	inActiveIcon?: string;
	label?: string;
}

interface NavigationBarOptions {
	horizontal?: boolean;
	segments: Segment[];
	handleSelected?: (index: number) => void;
}

const NavigationBarSegment = (props: HTMLAttributes<HTMLElement> & NavigationBarSegmentOptions) => {
	const { scheme } = useTheme();
	const onbackground = props.activated
		? hexFromArgb(scheme["onPrimaryContainer"])
		: hexFromArgb(scheme["onPrimaryContainer"]);
	return (
		<div
        tabIndex={1}
			className={css`
				display: flex;
				flex-direction: column;
				gap: 4px;
				align-items: center;
				& div,
				span {
					transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
				}
                &:focus-visible {
                    outline: unset;
                }
                
			`}
			onClick={props.onClick}
            onKeyDown={(e)=>{
                if (e.key === "Enter" && props.onClick) props.onClick(e as unknown as React.MouseEvent<HTMLElement>);
            }}
		>
			<div
				className={css`
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 99px;
					width: ${props.horizontal ? "56px" : "64px"};
					height: 32px;
					background-color: ${props.activated && hexFromArgb(scheme.secondaryContainer)};
					color: ${props.activated
						? hexFromArgb(scheme.onSurface)
						: hexFromArgb(scheme.onSurfaceVariant)};
					div:hover > & {
						background-color: ${onbackground +
						Math.round(0.08 * 256)
							.toString(16)
							.padStart(2, "0")};
					}
					div:active > & {
						background-color: ${onbackground +
						Math.round(0.12 * 256)
							.toString(16)
							.padStart(2, "0")};
					}
					div:focus-visible > & {
						background-color: ${onbackground +
						Math.round(0.12 * 256)
							.toString(16)
							.padStart(2, "0")};
					}
				`}
			>
				{props.icon && props.activated ? (
					<Icon size="24px" path={props.icon} />
				) : props.inActiveIcon && !props.activated ? (
					<Icon size="24px" path={props.inActiveIcon} />
				) : (
					props.icon && <Icon size="24px" path={props.icon} />
				)}
			</div>
			<Text
				style={{ textAlign: "center" }}
				type="labelMedium"
				color={props.activated ? "onSurface" : "onSurfaceVariant"}
			>
				{props.label}
			</Text>
		</div>
	);
};

const NavigationBar = (props: HTMLAttributes<HTMLElement> & NavigationBarOptions) => {
	const { scheme } = useTheme();
	const [activeIndex, setActiveIndex] = useState(0);
	const {horizontal, segments, handleSelected,  ...navigationbarProps } = props;

	return (
		<nav
			className={css`
				display: flex;
				flex-direction: ${props.horizontal ? "column" : "row"};
				gap: 16px;
				background-color: ${hexFromArgb(scheme.surfaceContainer)};
				width: max-content;
                ${!horizontal && "justify-content: space-evenly;"};
				padding-top: 12px;
				padding-bottom: 16px;
				${!horizontal && "width: 100%;"};
				${horizontal && "width: 80px;"};
			`}
			{...navigationbarProps}
		>
			{/* <NavigationBarSegment icon={mdiHome} inActiveIcon={mdiHomeOutline} label="Home" activated />
			<NavigationBarSegment icon={mdiCompass} inActiveIcon={mdiCompassOutline} label="Explore" />
			<NavigationBarSegment icon={mdiSquare} label="Other Item" />
			<NavigationBarSegment icon={mdiNavigation} label="Navigation Bar" />
			<NavigationBarSegment icon={mdiThumbUp} label="Is cool" /> */}
			{props.segments.map((segment, i) => {
				return (
					<NavigationBarSegment
						{...segment}
						title={activeIndex === i ? "tak" : "nie"}
						activated={activeIndex === i}
						key={i}
						horizontal={props.horizontal}
						onClick={() => {
							setActiveIndex(i);
							if (props.handleSelected) {
								props.handleSelected(i);
							}
						}}
					/>
				);
			})}
		</nav>
	);
};

export { NavigationBar };
