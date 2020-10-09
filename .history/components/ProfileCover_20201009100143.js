import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const CoverPhoto = styled.Image`
  width: 100%;
  height: 200px;
`;

const ProfilePhoto = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  border-width: 1px;
  border-color: white;
  position: absolute;
  top: 150px;
`;

const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 50px;
`;

const IconsContainer = styled.View`
  width: 70%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const IconContainer = styled.View`
  align-items: center;
`;

const ProfileCover = ({ user }) => {
  console.log(user);
  return (
    <Container>
      <CoverPhoto
        source={{
          uri:
            "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        }}
      />
      <ProfilePhoto
        source={{
          uri:
            "https://images.pexels.com/photos/4348798/pexels-photo-4348798.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        }}
      />
      <Name>{user.username}</Name>
      <IconsContainer>
        <IconContainer>
          <SimpleLineIcons name="note" size={24} color="gray" />
          <Text>Post</Text>
        </IconContainer>
        <IconContainer>
          <SimpleLineIcons name="user-follow" size={24} color="gray" />
          <Text>Update Info</Text>
        </IconContainer>
        <IconContainer>
          <SimpleLineIcons name="chart" size={24} color="gray" />
          <Text>Activity Log</Text>
        </IconContainer>
        <IconContainer>
          <Feather name="more-horizontal" size={24} color="gray" />
          <Text>More</Text>
        </IconContainer>
      </IconsContainer>
    </Container>
  );
};

export default ProfileCover;
