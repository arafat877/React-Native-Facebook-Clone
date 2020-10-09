import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: coral;
`;

const ProfileScreen = ({ navigation }) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>tiklaa</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default ProfileScreen;
