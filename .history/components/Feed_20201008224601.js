import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import PostItem from "./PostItem";
import AppBar from "./AppBar";
import ToolBar from "./ToolBar";
import Users from "./Users";
import Story from "./Story";
import { useSelector } from "react-redux";

const Feed = () => {
  const store = useSelector((store) => store);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(store.posts);
  }, [store.posts]);

  console.log(posts)

  return (
    <FlatList
      dahta={store.posts}
      extraData={posts}
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
