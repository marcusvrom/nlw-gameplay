import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator 
        screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: theme.colors.secondary100, opacity: 1.0, flex: 1}
        }}
        >
            <Screen 
            name="SignIn"
            component={SignIn}
            />
            <Screen 
            name="Home"
            component={Home}
            />
            <Screen 
            name="AppointmentDetails"
            component={AppointmentDetails}
            />
        </Navigator>
    )
}