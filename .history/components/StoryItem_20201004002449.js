import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Avatar from "./Avatar";

const Card = styled.View`
  width: 106px;
  height: 170px;
  position: relative;
  margin-right: 8px;
`;

const CardStory = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 12px;
`;

const CardUser = styled.View`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #ffffff;
  border-radius: 20px;
  width: 39px;
  height: 39px;
  align-items: center;
  justify-content: center;
`;

const CardFooter = styled.View`
  width: 100%;
  position: absolute;
  bottom: 12px;
  left: 9px;
`;

const Text = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
`;

const StoryItem = ({ item, friends }) => {
  return (
    <Card>
      <CardStory source={require("../assets/story1.jpeg")} />
      <CardUser>
        {friends ? (
          <Avatar source={require("../assets/user6.jpeg")} story />
        ) : (
          <AntDesign name="plus" size={24} color="#1777f2" />
        )}
      </CardUser>
      <CardFooter>
        <Text>{friends ? "asd" : "Add to story"}</Text>
      </CardFooter>
    </Card>
  );
};

export default StoryItem;
