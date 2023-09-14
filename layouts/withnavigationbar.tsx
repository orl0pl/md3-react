import { css } from "@emotion/css";
import { hexFromArgb } from "@material/material-color-utilities";
import {
	Button,
	InteractiveStateLayer,
	NavigationBar,
	Text,
	ThemeProvider,
	useTheme,
} from "../index";
import React, { useState } from "react";
import {
	mdiCompass,
	mdiCompassOutline,
	mdiHeart,
	mdiHome,
	mdiHomeOutline,
	mdiListBox,
	mdiListBoxOutline,
} from "@mdi/js";
import Icon from "@mdi/react";

function LayoutWithNavigationBar() {
	const { updateSourceColor, scheme, toggleTheme } = useTheme();
    const [isCompact, setIsCompact] = useState(window.matchMedia("(max-width: 600px)").matches)
	const handler = (e: MediaQueryListEvent) => setIsCompact(e.matches)
    window.matchMedia("(max-width: 600px)").addEventListener('change', handler);
    return (
		<div
			className={css`
				background-color: ${hexFromArgb(scheme.background)};
				flex: 1;
				display: flex;
				flex-direction: ${isCompact ? 'column' : 'row'};
				gap: 12px;
			`}
		>
			<NavigationBar
                horizontal={isCompact ? false : true}
				segments={[
					{ icon: mdiHome, label: "Dom", inActiveIcon: mdiHomeOutline },
					{ icon: mdiListBox, label: "Lista", inActiveIcon: mdiListBoxOutline },
					{ icon: mdiCompass, label: "Odkrywaj", inActiveIcon: mdiCompassOutline },
				]}
			/>
		</div>
	);
}

export { LayoutWithNavigationBar };
