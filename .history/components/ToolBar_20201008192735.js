import React from "react";
import styled from "styled-components/native";
import Avatar from "./Avatar";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

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
  height: 1px;
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

const Seperator = styled.View`
  width: 1px;
  height: 26px;
  background: #f0f0f0;
`;

const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f0f0;
`;

const ToolBar = () => {
  const [input, setInput] = useState("");
  console.log(input)
  return (
    <>
      <Container>
        <Row>
          <Avatar source="https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Input placeholder="What's on your mind?" onChangeText={setInput} />
        </Row>
        <Divider />
        <Row>
          <Menu>
            <Ionicons name="ios-videocam" size={22} color="#F44337" />
            <MenuText>Live</MenuText>
          </Menu>
          <Menu>
            <MaterialIcons
              name="photo-size-select-actual"
              size={20}
              color="#4CAF50"
            />
            <MenuText>Photo</MenuText>
          </Menu>
          <Menu>
            <MaterialCommunityIcons
              name="video-plus"
              size={22}
              color="#E141FC"
            />
            <MenuText>Room</MenuText>
          </Menu>
        </Row>
        <Seperator />
      </Container>
      <BottomDivider />
    </>
  );
};

export default ToolBar;
