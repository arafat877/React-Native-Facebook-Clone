import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  margin: 10px;
  font-size: 16px;
`;

const FeaturedPhotos = () => {
  return (
    <Container>
      <Text style={{ color: "#6a7180" }}>FEATURED PHOTOS</Text>
    </Container>
  );
};

export default FeaturedPhotos;
