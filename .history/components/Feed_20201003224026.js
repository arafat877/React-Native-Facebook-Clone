import React from "react";
import styled from "styled-components/native";

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

const Feed = () => {
  return <Container></Container>;
};

export default Feed;
