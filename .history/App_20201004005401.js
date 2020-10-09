import React from "react";
import { ScrollView, StyleSheet, StatusBar } from "react-native";
import styled from "styled-components/native";
import AppBar from "./components/AppBar";
import ToolBar from "./components/ToolBar";
import Users from "./components/Users";
import Story from "./components/Story";
import Feed from "./components/Feed";

const Container = styled.SafeAreaView`
  flex: 1;
`;

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Container>
        <Feed />
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
