import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationStack } from "./application";

const Navigation = (): React.JSX.Element => {
    return(
        <NavigationContainer>
            <ApplicationStack/>
        </NavigationContainer>
    )
}

export default Navigation;