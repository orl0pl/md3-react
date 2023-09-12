import * as React from "react";
import setupMD3, { Button, InteractiveStateLayer, m3Scheme } from "../../index";
setupMD3(document);
export default () => (
	<>
		{/* <InteractiveStateLayer layerColorName="onPrimaryContainer" layerOpacity={0.16}>
			A{" "}
			<code>
				{`#${m3Scheme['onPrimaryContainer'].toString(16).slice(0, -2)}${(.16 * 256)
            .toString(16)
            .replace(".", "")
            .padStart(2, "0")
            .slice(0, 2)}`}
			</code>
		</InteractiveStateLayer> */}
    <Button>
      Abecadło
    </Button>
	</>
);
