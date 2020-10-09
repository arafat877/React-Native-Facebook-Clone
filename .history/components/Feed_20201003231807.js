import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import PostItem from "./PostItemItem";

const Container = styled.View`
  flex: 1;
`;

const Feed = () => {
  return (
    <Container>
      <ScrollView>
        <PostItem />
        <PostItem />
        <PostItem />
      </ScrollView>
    </Container>
  );
};

export default Feed;
