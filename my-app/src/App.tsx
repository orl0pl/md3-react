import * as React from "react";
import {
	Button,
	InteractiveStateLayer,
	LayoutWithNavigationBar,
	NavigationBar,
	Text,
	ThemeProvider,
	useTheme,
} from "../../index";
import { css } from "@emotion/css";
import { Icon } from "@mdi/react";
import {
	mdiCodeTags,
	mdiCompass,
	mdiCompassOffOutline,
	mdiCompassOutline,
	mdiHeart,
	mdiHome,
	mdiHomeOutline,
	mdiListBox,
	mdiListBoxOutline,
} from "@mdi/js";
import { hexFromArgb } from "@material/material-color-utilities";
import HomeScreen from "~homescreen";
export default () => (
	<>
		<ThemeProvider>
			<LayoutWithNavigationBar
				segments={[
					{ icon: mdiHome, label: "Home", inActiveIcon: mdiHomeOutline },
					{ icon: mdiListBox, label: "List", inActiveIcon: mdiListBoxOutline },
					{ icon: mdiCodeTags, label: "Code" },
				]}
			>
				<HomeScreen />
			</LayoutWithNavigationBar>
		</ThemeProvider>
	</>
);
