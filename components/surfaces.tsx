import React, { CSSProperties, HTMLAttributes } from 'react'
import { argbFromHex, hexFromArgb, Scheme, themeFromSourceColor, TonalPalette } from '@material/material-color-utilities';
import { m3Scheme } from '..';



interface InteractiveStateLayerOptions {
    layerColorName: keyof Scheme,
    layerOpacity: number
}

interface ColorSurfaceOptions {
    colorName: keyof Scheme
}


const InteractiveStateLayer = ({...props}: HTMLAttributes<HTMLDivElement> & InteractiveStateLayerOptions)=>{
    const { layerColorName, layerOpacity, ...divProps} = props
    const InteractiveStateLayerStyles: CSSProperties = {
        // backgroundColor: `#${m3Scheme[props.layerColorName]}${(props.layerOpacity*256).toString(16).replace(".", "").padStart(2, '0').slice(0,2)}`,
        //backgroundColor: `#${m3Scheme[props.layerColorName].toString(16)}`
        backgroundColor: `#${hexFromArgb(m3Scheme[layerColorName] as number)}${(layerOpacity * 256)
            .toString(16)
            .replace(".", "")
            .padStart(2, "0")
            .slice(0, 2)}`
    }
    return <div {...divProps} style={InteractiveStateLayerStyles} />
}

const ColorSurface = ({...props}: HTMLAttributes<HTMLDivElement> & ColorSurfaceOptions)=>{
    const {colorName, ...divProps} = props;
    const ColorSurfaceStyles: CSSProperties = {
        backgroundColor: hexFromArgb(m3Scheme["primary"] as number)
    }
    return <div {...divProps} style={ColorSurfaceStyles}/>
}

export { InteractiveStateLayer, ColorSurface}
