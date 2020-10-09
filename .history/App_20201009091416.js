import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
