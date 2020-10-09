import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import AppBar from "../components/AppBar";
import Feed from "../components/Feed";
import ToolBar from "../components/ToolBar";
import Users from "../components/Users";
import Story from "../components/Story";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const HomeScreen = ({ navigation }) => {
  const { posts } = useSelector((store) => store);

  return (
    <Container>
      <Feed
        posts={posts.sort((a, b) => b.post.date - a.post.date)}
        navigation={navigation}
        header={
          <>
            <AppBar />
            <ToolBar />
            <Users />
            <Story navigation={navigation}/>
          </>
        }
      />
    </Container>
  );
};

export default HomeScreen;
