import React, { useEffect, useState } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import { useTheme } from "../providers";
import { AppBar, P } from "../components";
import { SaveIcon } from "../../assets";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackParamList } from "../types/stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Offset, Stroke, strokeColor } from "../types/models";
import { Canvas, Circle, Path, Skia } from "@shopify/react-native-skia";

const DrawingScreen = (): React.JSX.Element => {

    const { bottom } = useSafeAreaInsets()
    const { colors } = useTheme()
    const { params: { name: paramName } } = useRoute<RouteProp<StackParamList, "drawing">>()

    const [strokes, setStrokes] = useState<Stroke[]>([])
    const [points, setPoints] = useState<Offset[]>([])
    const [brushSize, setBrushSize] = useState<2 | 4 | 6>(4)
    const [color, setColor] = useState<strokeColor>("#000000")

    const [name, setName] = useState("")

    useEffect(() => {
        if (paramName) {
            setName(paramName)
        }
    }, [paramName])

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <AppBar
                title={name.length > 0 ? name : "Draw Your Dreams"}
                actions={[
                    <TouchableOpacity activeOpacity={0.75}>
                        <SaveIcon width={25} height={25} color={colors.white} />
                    </TouchableOpacity>
                ]}
            />
            <Pressable
                onTouchStart={(e) => {
                    const { locationX: x, locationY: y } = e.nativeEvent
                    const coor: Offset = { x, y }
                    setPoints(e => [...e, coor])
                }}
                onTouchMove={(e) => {
                    const { locationX: x, locationY: y } = e.nativeEvent
                    const coor: Offset = { x, y }
                    setPoints(e => [...e, coor])
                }}
                onTouchEnd={(e) => {
                    const stroke: Stroke = {
                        points: points,
                        brushSize: brushSize,
                        color: color
                    }
                    setStrokes(e => [...e, stroke])
                    setPoints([])
                }}
                style={{ flex: 1, marginBottom: bottom }}
            >
                
            </Pressable>
        </View>
    )
}

export default DrawingScreen;