import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 58px;
  padding: 0 11px;
  align-items: "center";
  flex-direction: "row";
  justify-content: "space-between";
`;

const Text = styled.Text`
  color: "#3a86e9";
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;

const AppBar = () => {
  return <Container>
      <Text>hello</Text>
  </Container>;
};

export default AppBar;
