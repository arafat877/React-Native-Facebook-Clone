import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import PostItem from "./PostItem";

const Feed = () => {
  return (
    <>
      <PostItem />
      <PostItem />
      <PostItem />
    </>
  );
};

export default Feed;
