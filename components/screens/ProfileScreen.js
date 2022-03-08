import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity
} from "react-native";
import React from "react";
import Input from "../generic/Input";
import { APP_ICONS, APP_STYLE } from "../../context/settings";
import ProfileHeader from "../headers/ProfileHeader";
import UserProfileHeader from "../headers/UserProfileHeader";
import Button from "../generic/Button";

const images = [
  {
    id: 1,
    uri: require("../../assets/manek-singh-E2No5o6wzak-unsplash.jpg")
  },
  {
    id: 2,
    uri: require("../../assets/wallpaper.jpg")
  },
  {
    id: 3,
    uri: require("../../assets/manek-singh-E2No5o6wzak-unsplash.jpg")
  },
  {
    id: 4,
    uri: require("../../assets/wallpaper.jpg")
  }
];

const HEADER_HEIGHT =
  Platform.OS === "ios" ? 115 : 70 + StatusBar.currentHeight;

const ProfileScreen = () => {
  return (
    <View>
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: HEADER_HEIGHT,
          backgroundColor: "#fff",
          elevation: 1000,
          zIndex: 1000
        }}
      >
        <ProfileHeader />
      </View>
      <ScrollView style={{ marginTop: HEADER_HEIGHT }}>
        <UserProfileHeader />
        <Button title="Add to story" />
        {images.map((image) => (
          <View key={image.id} style={{ height: 400, margin: 20 }}>
            <Image
              source={image.uri}
              style={{
                flex: 1,
                height: null,
                width: null,
                borderRadius: 10
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create(APP_STYLE);
