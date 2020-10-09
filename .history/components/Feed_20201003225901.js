import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Avatar from "./Avatar";
import { Entypo } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const User = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #222121;
`;

const Time = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #747476;
`;

const Post = styled.Text`
  font-size: 12px;
  color: #222121;
  line-height: 16px;
  padding: 0 11px;
`;

const Photo = styled.Image`
  margin-top: 9px;
  width: 100%;
  height: 300px;
`;

const Footer = styled.View`
  padding: 0 11px;
`;

const FooterCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;

const IconCount = styled.View`
  background: #1878f3;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;

const TextCount = styled.Text`
  font-size: 11px;
  color: #424040;
`;

const Feed = () => {
  return (
    <Container>
      <Header>
        <Row>
          <Avatar source={require("../assets/user4.jpeg")} />
          <View style={{ paddingLeft: 10 }}>
            <User>Jane Doe</User>
            <Row>
              <Time>11 mins ago</Time>
              <Entypo name="dot-single" size={12} color="#747476" />
              <Entypo name="globe" size={10} color="#747476" />
            </Row>
          </View>
        </Row>
        <Entypo name="dots-three-horizontal" size={15} color="#222121" />
      </Header>
      <Post>
        In aute consequat dolor mollit pariatur proident amet. Ipsum esse est ex
        dolore dolore aute Lorem.
      </Post>
      <Photo source={require("../assets/post1.jpeg")} />
    </Container>
  );
};

export default Feed;
