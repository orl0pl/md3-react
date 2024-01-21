import React, { HTMLAttributes } from 'react';
import { Scheme } from '@material/material-color-utilities';
interface InteractiveStateLayerOptions {
    layerColorName: keyof Scheme;
    layerOpacity: number;
}
interface ColorSurfaceOptions {
    colorName: keyof Scheme;
}
declare const InteractiveStateLayer: ({ ...props }: HTMLAttributes<HTMLDivElement> & InteractiveStateLayerOptions) => React.JSX.Element;
declare const ColorSurface: ({ ...props }: HTMLAttributes<HTMLDivElement> & ColorSurfaceOptions) => React.JSX.Element;
export { InteractiveStateLayer, ColorSurface };
