import React from "react";
import { FlatList } from "react-native";
import PostItem from "./PostItem";

const posts = [
  {
    id: 1,
    user: {
      id: 1,
      username: "Jane Doe",
      profilePicture:
        "https://images.pexels.com/photos/4422971/pexels-photo-4422971.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    post: {
      id: 1,
      desc:
        "Aute elit culpa ipsum id sint proident incididunt sint sint pariatur pariatur.",
      photo:
        "https://images.pexels.com/photos/4201333/pexels-photo-4201333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: "11 mins ago",
    },
    likes: 124,
    comments: 8,
  },
  {
    id: 2,
    user: {
      id: 2,
      username: "John Doe",
      profilePicture:
        "https://images.pexels.com/photos/4422971/pexels-photo-4422971.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    post: {
      id: 2,
      desc:
        "Aute elit culpa ipsum id sint proident incididunt sint sint pariatur pariatur.",
      photo:
        "https://images.pexels.com/photos/4201333/pexels-photo-4201333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: "54 mins ago",
    },
    likes: 14,
    comments: 1,
  },
  {
    id: 3,
    user: {
      id: 3,
      username: "Helena Taylor",
      profilePicture:
        "https://images.pexels.com/photos/4348798/pexels-photo-4348798.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    post: {
      id: 3,
      desc:
        "Aute elit culpa ipsum id sint proident incididunt sint sint pariatur pariatur.",
      photo:
        "https://images.pexels.com/photos/4201333/pexels-photo-4201333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: "2 hours ago",
    },
    likes: 41,
    comments: 5,
  },
  {
    id: 4,
    user: {
      id: 4,
      username: "Adam Doe",
      profilePicture:
        "https://images.pexels.com/photos/4422971/pexels-photo-4422971.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    post: {
      id: 4,
      desc:
        "Aute elit culpa ipsum id sint proident incididunt sint sint pariatur pariatur.",
      photo:
        "https://images.pexels.com/photos/4201333/pexels-photo-4201333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: "5 hours ago",
    },
    likes: 144,
    comments: 9,
  },
  {
    id: 5,
    user: {
      id: 5,
      username: "Phebe Sandler",
      profilePicture:
        "https://images.pexels.com/photos/3016320/pexels-photo-3016320.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    post: {
      id: 5,
      desc:
        "Aute elit culpa ipsum id sint proident incididunt sint sint pariatur pariatur.",
      photo:
        "https://images.pexels.com/photos/3016320/pexels-photo-3016320.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: "1 day ago",
    },
    likes: 24,
    comments: 3,
  },
];

const Feed = () => {
  return (
    // <FlatList
    //   nestedScrollEnabled
    //   data={posts}
    //   keyExtractor={(item) => item.id.toString()}
    //   renderItem={({ item }) => <PostItem item={item} />}
    // />
  );
};

export default Feed;
