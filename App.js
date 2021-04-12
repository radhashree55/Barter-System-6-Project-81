import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppDrawerNavigator } from "./components/AppDrawerNavigator";
import { createBottomTabNavigator } from "react-navigation-tabs";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  Drawer: { screen: AppDrawerNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
