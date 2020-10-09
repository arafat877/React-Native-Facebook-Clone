import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <HomeScreen/>
    </Provider>
  );
}