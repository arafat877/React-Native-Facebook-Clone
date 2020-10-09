import React from "react";
import { FlatList } from "react-native";
import PostItem from "./PostItem";
import AppBar from "./AppBar";
import ToolBar from "./ToolBar";
import Users from "./Users";
import Story from "./Story";
import { useSelector } from "react-redux";
import { postArray } from "../DummyData";

const Feed = () => {
  const posts = useSelector((store) => store);
  console.log(posts);
  return (
    <FlatList
      nestedScrollEnabled
      data={postArray}
      initialNumToRender={5}
      ListHeaderComponent={() => (
        <>
          <AppBar />
          <ToolBar />
          <Users />
          <Story />
        </>
      )}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PostItem item={item} />}
    />
  );
};

export default Feed;
