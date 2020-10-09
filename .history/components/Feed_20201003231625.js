import React from "react";
import styled from "styled-components/native";
import Post from "./Post";

const Container = styled.View`
  flex: 1;
`;

const Feed = () => {
  return (
    <Container>
      <Post />
    </Container>
  );
};

export default Feed;
