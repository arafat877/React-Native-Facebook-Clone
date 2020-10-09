import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import window from "../Layout";

const { height, width } = window.window;

const Container = styled.View`
  margin: 10px;
`;

const PhotoContainer = styled.View`
  flex-direction: row;
`;

const BigPhoto = styled.Image`
  width: ${width / 2 - 10}px;
  height: ${width / 2 - 10}px;
  margin: 5px;
`;

const FeaturedPhotos = () => {
  return (
    <Container>
      <Text style={{ color: "#6a7180", fontSize: 16 }}>FEATURED PHOTOS</Text>
      <PhotoContainer>
        <BigPhoto
          source={{
            uri:
              "https://images.pexels.com/photos/4348798/pexels-photo-4348798.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          }}
        />
        <BigPhoto
          source={{
            uri:
              "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          }}
        />
      </PhotoContainer>
    </Container>
  );
};

export default FeaturedPhotos;
