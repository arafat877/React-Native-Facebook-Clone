import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import window from "../Layout";

const { height, width } = window.window;

const BackIcon = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 20px;
`;

const UserInfoContainer = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 50px;
  flex-direction: row;
  align-items: center;
`;

const ProfilePicture = styled.Image`
  height: 32px;
  width: 32px;
  border-radius: 50px;
`;

const Username = styled.Text`
  margin-left: 10px;
  font-weight: bold;
  color: #808282;
`;

const Photo = styled.Image`
  width: ${width};
  height: ${height};
`;

const StoryScreen = ({ navigation, route }) => {
  const { stories, index } = route.params;
  const item = stories[index];

  const handlePress = (e) => {
    if (e.nativeEvent.locationX < width / 2) {
      stories[index - 1] &&
        navigation.navigate("Story", { stories, index: index - 1 });
    } else {
      stories[index + 1]
        ? navigation.navigate("Story", { stories, index: index + 1 })
        : navigation.navigate("Home");
    }
  };

  const [finish, setFinish] = useState();

  useEffect(() => {
    finish?.didJustFinish &&
      (stories[index + 1]
        ? navigation.navigate("Story", { stories, index: index + 1 })
        : navigation.navigate("Home"));
  }, [finish]);

  console.log(item);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Photo source={{ uri: item.story.photo }} />
      <BackIcon onPress={() => navigation.goBack()}>
        <Ionicons name="md-arrow-back" size={32} color="white" />
      </BackIcon>
      <UserInfoContainer>
        <ProfilePicture
          source={{ uri: item.user.profilePicture }}
          resizeMode="cover"
        />
        <Username>{item.user.username}</Username>
      </UserInfoContainer>
    </TouchableOpacity>
  );
};

export default StoryScreen;
