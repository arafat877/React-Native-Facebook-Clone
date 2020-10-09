import React from "react";
import { FlatList } from "react-native";
import PostItem from "./PostItem";
import AppBar from "./AppBar";
import ToolBar from "./ToolBar";
import Users from "./Users";
import Story from "./Story";
import { useDispatch, useSelector } from "react-redux";

const posts = useSelector((store) => store);
const dispatch = useDispatch();

const Feed = () => {
  return (
    <FlatList
      nestedScrollEnabled
      data={posts.sort((a, b) => b.date - a.date)}
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
