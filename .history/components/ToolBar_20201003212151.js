import React from "react";
import styled from "styled-components/native";
import Avatar from "./Avatar";

const Container = styled.View`
  width: 100%;
  height: 92px;
`;

const Row = styled.View`
  flex-direction: row;
  background: #ffffff;
  width: 100%;
  padding: 0 11px;
  align-items: center;
`;

const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  padding: 0 8px;
`;

const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background: #f0f0f0;
`;

const Menu = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
`;

const MenuText = styled.Text`
  padding-left: 11px;
  font-weight: 500;
  font-size: 12px;
`;

const ToolBar = () => {
  return (
    <Container>
      <Row>
        <Avatar source={require("../assets/user1.jpeg")} />
        <Input placeholder="What's on your mind?" />
      </Row>
      <Divider />
      <Menu>
        <MenuText>Live</MenuText>
      </Menu>
    </Container>
  );
};

export default ToolBar;
