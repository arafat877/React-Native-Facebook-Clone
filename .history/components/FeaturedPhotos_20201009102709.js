import React from 'react';
import { Text } from 'react-native';
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const FeaturedPhotos = () => {
    return (
        <Container>
            <Text>FEATURED PHOTOS</Text>
        </Container>
    );
};

export default FeaturedPhotos;