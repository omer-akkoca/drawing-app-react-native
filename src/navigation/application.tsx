import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawingScreen, HomeScreen, SplashScreen } from "../screens";
import { SCREENS } from "../constants/screens";
import { StackParamList } from "../types/stack";

const Stack = createNativeStackNavigator<StackParamList>();

const ApplicationStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={SCREENS.splash}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={SCREENS.splash} component={SplashScreen} />
            <Stack.Screen name={SCREENS.home} component={HomeScreen} />
            <Stack.Screen name={SCREENS.drawing} component={DrawingScreen} initialParams={{ name: "" }}/>
        </Stack.Navigator>
    )
}

export { ApplicationStack };