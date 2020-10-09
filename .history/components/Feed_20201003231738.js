import React from "react";
import styled from "styled-components/native";
import PostItem from "./PostItemItem";

const Container = styled.View`
  flex: 1;
`;

const Feed = () => {
  return (
    <Container>
      <PostItem />
      <PostItem />
      <PostItem />
    </Container>
  );
};

export default Feed;
