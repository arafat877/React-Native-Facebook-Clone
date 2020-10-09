import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import Feed from "../components/Feed";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const HomeScreen = ({ navigation }) => {
  const { posts } = useSelector((store) => store);

  return (
    <Container>
      <Feed posts={posts.sort((a, b) => b.post.date - a.post.date)} />
    </Container>
  );
};

export default HomeScreen;
