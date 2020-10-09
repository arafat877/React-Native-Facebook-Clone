import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 58px;
  background: orange;
  flex-direction: row;
  align-items: center;
`;

const Users = () => {
  return (
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 11 }}
      ></ScrollView>
    </Container>
  );
};

export default Users;
