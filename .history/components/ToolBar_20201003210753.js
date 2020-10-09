import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 92px;
  background: orange;
`;

const Row = styled.View`
  flex-direction: row;
  background: #ffffff;
  width: 100%;
  padding: 0 11px;
  align-items: center;
`;

const ToolBar = () => {
  return <Container></Container>;
};

export default ToolBar;
