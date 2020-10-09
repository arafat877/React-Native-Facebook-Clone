import React from 'react';
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const HomeScreen = () => {
    return (
        <Container>
        <Feed />
      </Container>
    );
};

export default HomeScreen;