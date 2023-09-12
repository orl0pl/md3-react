import * as React from "react";
import { Button, InteractiveStateLayer, ThemeProvider, useTheme } from "../../index";
export default () => (
	<>
		<ThemeProvider>
     <Component/>
		</ThemeProvider>
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
	</>
);
function Component () {
  const {updateSourceColor}=useTheme()
  return <>
   <Button onClick={()=>{updateSourceColor('#4400ee')}}>Set Blue</Button>
   <Button onClick={()=>{updateSourceColor('#44ee00')}}>Set Green</Button>
   <Button onClick={()=>{updateSourceColor('#ee4400')}}>Set Red</Button>
  </>
}