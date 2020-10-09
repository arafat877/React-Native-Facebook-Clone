import React from "react";
import { FlatList, ScrollView } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Avatar from "./Avatar";

const Container = styled.View`
  width: 100%;
  height: 58px;
  flex-direction: row;
  align-items: center;
`;

const Room = styled.TouchableOpacity`
  width: 115px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  border-width: 1px;
  border-color: #82b1ff;
  padding: 0 15px;
  margin-right: 12px;
`;

const Text = styled.Text`
  color: #1777f2;
  font-size: 12px;
  padding-left: 6px;
`;

const User = styled.View`
  margin-right: 13px;
`;

const users = [
  {
    id: 1,
    profilePicture:
      "https://images.pexels.com/photos/5020372/pexels-photo-5020372.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    online: "true",
  },
  {
    id: 2,
    profilePicture:
      "https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    online: "true",
  },
  {
    id: 3,
    profilePicture:
      "https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    online: "false",
  },
  {
    id: 4,
    profilePicture:
      "https://images.pexels.com/photos/2896841/pexels-photo-2896841.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    online: "false",
  },
  {
    id: 5,
    profilePicture:
      "https://images.pexels.com/photos/2896841/pexels-photo-2896841.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    online: "false",
  },
  {
    id: 6,
    profilePicture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    online: "false",
  },
  {
    id: 7,
    profilePicture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    online: "false",
  },
  {
    id: 8,
    profilePicture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    online: "false",
  },
];

const Users = () => {
  return (
    <Container>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Avatar source={item.profilePicture} online={online} />
        )}
      />
    </Container>
  );
};

export default Users;
