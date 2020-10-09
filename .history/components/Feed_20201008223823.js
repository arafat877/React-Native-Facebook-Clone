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

  const [postData, setPostdata] = useState([]);

  useEffect(() => {
    setPostdata(store.posts);
  }, [store.posts]);

  return (
    <FlatList
      data={store.posts}
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
