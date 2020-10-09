import React from "react";
import { FlatList } from "react-native";
import PostItem from "./PostItem";

const posts = [
  {
    id: 1,
    user: {
      id: 1,
      username: "Jane Doe",
      profilePicture: "user4.jpeg",
    },
    post: {
      id: 1,
      desc:
        "Aute elit culpa ipsum id sint proident incididunt sint sint pariatur pariatur.",
      photo: "post1.jpeg",
      date:"11 mins ago"
    },
    likes: 124,
    comments: 8,
  },
  {
    id: 2,
    user: {
      id: 2,
      username: "John Doe",
      profilePicture: "user6.jpeg",
    },
    post: {
      id: 2,
      desc:
        "Aute elit culpa ipsum id sint proident incididunt sint sint pariatur pariatur.",
      photo: "post2.jpeg",
      date:"54 mins ago"
    },
    likes: 14,
    comments: 1,
  },
  {
    id: 3,
    user: {
      id: 3,
      username: "Helena Taylor",
      profilePicture: "user3.jpeg",
    },
    post: {
      id: 3,
      desc:
        "Aute elit culpa ipsum id sint proident incididunt sint sint pariatur pariatur.",
      photo: "post3.jpeg",
      date:"2 hours ago"
    },
    likes: 41,
    comments: 5,
  },
  {
    id: 4,
    user: {
      id: 4,
      username: "Adam Doe",
      profilePicture: "user5.jpeg",
    },
    post: {
      id: 4,
      desc:
        "Aute elit culpa ipsum id sint proident incididunt sint sint pariatur pariatur.",
      photo: "post4.jpeg",
      date:"5 hours ago"
    },
    likes: 144,
    comments: 9,
  },
  {
    id: 5,
    user: {
      id: 5,
      username: "Phebe Sandler",
      profilePicture: "user2.jpeg",
    },
    post: {
      id: 5,
      desc:
        "Aute elit culpa ipsum id sint proident incididunt sint sint pariatur pariatur.",
      photo: "post5.jpeg",
      date:"1 day ago"
    },
    likes: 24,
    comments: 3,
  },
];

const Feed = () => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PostItem item={item} />}
    />
  );
};

export default Feed;
