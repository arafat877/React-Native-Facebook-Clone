import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import PostItem from "./PostItem";
import AppBar from "./AppBar";
import ToolBar from "./ToolBar";
import Users from "./Users";
import Story from "./Story";

const Container = styled.SafeAreaView`
  background-color: white;
`;

const Feed = ({ posts, navigation, header }) => {
  return (
    <Container>
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PostItem item={item} navigation={navigation}/>}
        ListHeaderComponent={() => (
          header
        )}
      />
    </Container>
  );
};

export default Feed;
