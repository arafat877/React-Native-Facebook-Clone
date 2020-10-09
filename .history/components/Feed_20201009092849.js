import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import PostItem from "./PostItem";
import AppBar from "./AppBar";
import ToolBar from "./ToolBar";
import Users from "./Users";
import Story from "./Story";
import { useSelector } from "react-redux";

const Feed = ({ posts, navigation }) => {
  return (
    <FlatList
      data={posts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Text>{item.desc}</Text>}
      ListHeaderComponent={() => (
        <>
          <AppBar />
          <ToolBar navigation={navigation} />
          <Users />
          <Story />
        </>
      )}
    />
  );
};

export default Feed;
