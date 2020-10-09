import React from "react";
import { FlatList, ScrollView } from "react-native";
import styled from "styled-components/native";
import StoryItem from "./StoryItem";

const Container = styled.View`
  width: 100%;
  height: 192px;
  flex-direction: row;
  align-items: center;
`;

const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f0f0;
`;

const stories = [
  {
    id: 1,
    user: {
      id: 1,
      username: "John Doe",
      profilePicture:
        "https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    story: {
      id: 1,
      photo:
        "https://images.pexels.com/photos/3772771/pexels-photo-3772771.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 2,
    user: {
      id: 2,
      username: "Jane Harold",
      profilePicture:
        "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    story: {
      id: 2,
      photo:
        "https://images.pexels.com/photos/4557877/pexels-photo-4557877.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 3,
    user: {
      id: 3,
      username: "Phebe Taylor",
      profilePicture:
        "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    story: {
      id: 3,
      photo:
        "https://images.pexels.com/photos/4315839/pexels-photo-4315839.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 4,
    user: {
      id: 4,
      username: "Mark Durden",
      profilePicture:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    story: {
      id: 4,
      photo:
        "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 6,
    user: {
      id: 6,
      username: "Harry Alex",
      profilePicture:
        "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    story: {
      id: 6,
      photo:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
];

const Story = () => {
  return (
    <>
      <Container>
        <FlatList
          data={stories}
          horizontal
          initialNumToRender={10}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => (
            <StoryItem profilePicture="https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          )}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <StoryItem item={item} friends />}
        />
      </Container>
      <BottomDivider />
    </>
  );
};

export default Story;
