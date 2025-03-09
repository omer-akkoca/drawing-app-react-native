import React, { useEffect } from "react";
import { View, Animated, useAnimatedValue } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../constants/screens";
import { P } from "../components";

const SplashScreen = (): React.JSX.Element => {

    const navigation = useNavigation()
    const fadeAnim = useAnimatedValue(0)

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(SCREENS.home as never)
        }, 2000);
    }, [])

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Animated.View style={{ opacity: fadeAnim }}>
                <P size={25} color="blue" weight="bold" align="center">Life is Art</P>
                <P size={25} color="blue" weight="bold" align="center">Paint Your Dreams</P>
            </Animated.View>
        </View>
    )
}

export default SplashScreen;