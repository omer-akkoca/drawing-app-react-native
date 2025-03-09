import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IAppBar } from "../types/component";
import { stbh } from "../constants/responsive";
import { useNavigation } from "@react-navigation/native";
import { BackIcon } from "../../assets";
import { useTheme } from "../providers";
import { P } from "./";

const AppBar = ({
    bgColor = "blue",
    title = "A Title",
    leading,
    actions = [],
}: IAppBar): React.JSX.Element => {

    const navigation = useNavigation()
    const { colors } = useTheme()

    return (
        <View style={[styles.wrapper, { backgroundColor: colors[bgColor], paddingTop: stbh, shadowColor: colors.black }]}>
            <View style={styles.container}>
                <View style={styles.leading}>
                    {
                        leading ?? (
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                activeOpacity={0.75}
                            >
                                <BackIcon color="white" width={25} height={25}/>
                            </TouchableOpacity>
                        )
                    }
                </View>
                <View style={styles.center}>
                    <P color="white" size={18} align="center" weight="bold">{title}</P>
                </View>
                <View style={styles.actions}>
                    {
                        actions.map((e, i) => (
                            <View
                                key={i.toString()}
                                style={{ marginRight: i == actions.length - 1 ? 0 : 8 }}
                            >
                                {e}
                            </View>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
    },
    container: {
        justifyContent: "center",
        flexDirection: "row",
        height: 45,
        paddingHorizontal: 16,
    },
    leading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    center: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    actions: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
    },
})

export default AppBar;