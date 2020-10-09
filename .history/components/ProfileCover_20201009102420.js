import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

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
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const IconContainer = styled.View`
  align-items: center;
`;

const Desc = styled.Text`
  width: 90%;
  margin-top: 20px;
  font-size: 16px;
`;

const UserInfoContainer = styled.View``;

const UserInfoItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProfileCover = ({ user }) => {
  return (
    <>
      <Container>
        <CoverPhoto
          source={{
            uri:
              "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          }}
        />
        <ProfilePhoto
          source={{
            uri: user.profilePicture,
          }}
        />
        <Name>{user.username}</Name>
        <IconsContainer>
          <IconContainer>
            <SimpleLineIcons name="note" size={20} color="#6a7180" />
            <Text style={{ color: "#6a7180" }}>Post</Text>
          </IconContainer>
          <IconContainer>
            <SimpleLineIcons name="user-follow" size={20} color="#6a7180" />
            <Text style={{ color: "#6a7180" }}>Update Info</Text>
          </IconContainer>
          <IconContainer>
            <SimpleLineIcons name="chart" size={20} color="#6a7180" />
            <Text style={{ color: "#6a7180" }}>Activity Log</Text>
          </IconContainer>
          <IconContainer>
            <Feather name="more-horizontal" size={20} color="#6a7180" />
            <Text style={{ color: "#6a7180" }}>More</Text>
          </IconContainer>
        </IconsContainer>
        <Desc>🔥 Excepteur duis id cillum ullamco fugiat reprehenderit 🚀</Desc>
      </Container>
      <UserInfoContainer>
        <UserInfoItem>
          <MaterialIcons name="work" size={24} color="#6a7180" />
          <Text style={{ color: "black", marginLeft: 10 }}>
            Works at Facebook
          </Text>
        </UserInfoItem>
        <UserInfoItem>
          <MaterialIcons name="home" size={24} color="#6a7180" />
          <Text style={{ color: "black", marginLeft: 10 }}>
            Lives in San Francisco, California
          </Text>
        </UserInfoItem>
        <UserInfoItem>
          <FontAwesome name="graduation-cap" size={24} color="#6a7180" />
          <Text style={{ color: "black", marginLeft: 10 }}>
            Studied at University of Colorado
          </Text>
        </UserInfoItem>
        <UserInfoItem>
          <Entypo name="location-pin" size={24} color="#6a7180" />
          <Text style={{ color: "black", marginLeft: 10 }}>
            From Chicago, Illinois
          </Text>
        </UserInfoItem>
      </UserInfoContainer>
    </>
  );
};

export default ProfileCover;
