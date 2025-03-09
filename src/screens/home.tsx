import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { AppBar, P } from "../components";
import { width } from "../constants/responsive";
import { useTheme } from "../providers";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawIcon } from "../../assets";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../constants/screens";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../types/stack";

const HomeScreen = (): React.JSX.Element => {

    const { colors } = useTheme()
    const { bottom } = useSafeAreaInsets()
    const { navigate } = useNavigation<NativeStackNavigationProp<StackParamList>>()

    const drawings: String[] = []

    return (
        <View style={{ flex: 1 }}>
            <AppBar
                title="My Drawings"
                leading={<></>}
            />
            <View style={{ flex: 1, position: "relative" }}>
                {
                    drawings.length > 0
                    ?   (
                        <FlatList
                    data={drawings}
                    numColumns={2}
                    style={{ paddingHorizontal: 16 }}
                    ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                    ListFooterComponent={() => <View style={{ height: bottom + 16 }} />}
                    ListHeaderComponent={() => <View style={{ height: 16 }} />}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        const boxWidth = (width - (16 * 3)) / 2;
                        const firstCol = index % 2 === 0;
                        return (
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => {
                                    // @ts-ignore
                                    navigate(SCREENS.drawing, { name: item })
                                }}
                            >
                                <View
                                    style={[
                                        styles.boxContainer,
                                        {
                                            width: boxWidth, height: boxWidth, shadowColor: "#00000075",
                                            backgroundColor: colors.white, marginRight: firstCol ? 16 : 0
                                        }
                                    ]}
                                >
                                    <P color="black">{item}</P>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                    )
                    :   (
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <P color="black">No drawings saved yet.</P>
                        </View>
                    )
                }
                
            </View>
            <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => navigate(SCREENS.drawing as never)}
                style={[styles.drawButton, { backgroundColor: colors.blue, bottom: bottom + 16, shadowColor: colors.black }]}
            >
                <DrawIcon width={20} height={20} color={colors.white} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        justifyContent: "center",
        alignItems: "center",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 2,
        borderRadius: 4,
        overflow: "hidden"
    },
    drawButton: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        right: 16,
        borderRadius: 99,
        width: 50,
        height: 50,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 2,
    }
})

export default HomeScreen;