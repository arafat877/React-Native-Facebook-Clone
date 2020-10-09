import React from "react";
import styled from "styled-components/native";
import FeaturedPhotos from "../components/FeaturedPhotos";
import Feed from "../components/Feed";
import ProfileCover from "../components/ProfileCover";
import { postArray } from "../DummyData";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const ProfileScreen = ({ route, navigation }) => {
  const { user } = route.params;

  return (
    <Container>
      <ProfileCover user={user} />
      <FeaturedPhotos posts={postArray} navigation={navigation} />
      <Feed />
    </Container>
  );
};

export default ProfileScreen;
