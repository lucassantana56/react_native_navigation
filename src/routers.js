import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
//import {createDrawerNavigator} from "@react-navigation/drawer";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

const StackNavigation = createStackNavigator();

import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register.js";
import Home from "./InternalRouter";


export default function Routers() {
    return (
        <NavigationContainer>
            <StackNavigation.Navigator screenOptions={{headerShown: false}}>
                <StackNavigation.Screen name="Login" component={Login}/>
                <StackNavigation.Screen name="Register" component={Register}/>
                <StackNavigation.Screen name="Home" component={Home}/>
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
}
