import React, { CSSProperties, HTMLAttributes } from 'react'
import { argbFromHex, hexFromArgb, Scheme, themeFromSourceColor, TonalPalette } from '@material/material-color-utilities';
import { m3Scheme } from '..';



interface InteractiveStateLayerOptions {
    layerColorName: keyof Scheme,
    layerOpacity: number
}


const InteractiveStateLayer = ({...props}: HTMLAttributes<HTMLDivElement> & InteractiveStateLayerOptions)=>{
    const InteractiveStateLayerStyles: CSSProperties = {
        backgroundColor: `#${m3Scheme[props.layerColorName]}${(props.layerOpacity*256).toString(props.layerOpacity).replace(".", "").padStart(2, '0').slice(0,2)}`
    }
    return <div style={InteractiveStateLayerStyles} {...props}/>
}


export { InteractiveStateLayer}