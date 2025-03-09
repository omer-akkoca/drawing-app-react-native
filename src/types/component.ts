import { GestureResponderEvent, TextStyle } from "react-native"
import { colorsType } from "./color"
import React, { PropsWithChildren } from "react"

// P
type alignType = "auto" | "left" | "justify" | "right" | "center"
type transformType = "capitalize" | "lowercase" | "none" | "uppercase"
type fontWeight = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold" | "normal"

export interface IP extends PropsWithChildren {
    color?: colorsType,
    size?: number,
    weight?: fontWeight
    lines?: number,
    align?: alignType,
    //font?: fontFamilyType,
    lineHeight?: number,
    onPress?: (e: GestureResponderEvent) => void,
    transform?: transformType,
    spacing?: number,
    customStyle?: TextStyle,
}

//AppBar
export interface IAppBar{
    bgColor?: colorsType,
    title?: string,
    leading?: React.JSX.Element,
    actions?: React.JSX.Element[],
}

//SVG Component
export interface ISvg{
    color: colorsType,
    size: number,
}