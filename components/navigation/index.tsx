import React from "react";
import { ColorSchemeName } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { routeConfig, homeScreen } from "@/route.config";
import { ScreenOption } from "@types";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}): JSX.Element {
  return (
    <NavigationContainer
      linking={routeConfig}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <StackNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const screens: Record<string, ScreenOption> = routeConfig.config.screens;
const Stack = createStackNavigator();

function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      headerMode="screen"
      initialRouteName={homeScreen}
      screenOptions={{ headerShown: true }}
      mode="card"
    >
      {Object.keys(screens).map((e) => (
        <Stack.Screen
          key={screens[e].path}
          name={e}
          component={screens[e].screen}
          options={screens[e].options}
        />
      ))}
    </Stack.Navigator>
  );
}
