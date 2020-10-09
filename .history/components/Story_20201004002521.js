import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import Avatar from "./Avatar";
import StoryItem from "./StoryItem";

const Container = styled.View`
  width: 100%;
  height: 192px;
  flex-direction: row;
  align-items: center;
`;

const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f0f0;
`;

const Story = () => {
  return (
    <>
      <Container>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 11 }}
        >
          <StoryItem/>
        </ScrollView>
      </Container>
      <BottomDivider />
    </>
  );
};

export default Story;
