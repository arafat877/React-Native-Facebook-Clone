import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  margin: 5px;
`;

const FeaturedPhotos = () => {
  return (
    <Container>
      <Text>FEATURED PHOTOS</Text>
    </Container>
  );
};

export default FeaturedPhotos;
