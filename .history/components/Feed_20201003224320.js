import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Avatar from "./Avatar";

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const User = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #222121;
`;

const Feed = () => {
  return (
    <Container>
      <Header>
        <Row>
          <Avatar source={require("../assets/user4.jpeg")} />
          <View style={{ paddingLeft: 10 }}></View>
          <User>sad</User>
        </Row>
      </Header>
    </Container>
  );
};

export default Feed;
