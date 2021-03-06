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
import React, { useContext } from "react";
import Input from "../generic/Input";
import { APP_ICONS, APP_STYLE, APP_PAGES } from "../../context/settings";
import ProfileHeader from "../headers/ProfileHeader";
import UserProfileHeader from "../headers/UserProfileHeader";
import Button from "../generic/Button";
import UserProfileInformation from "../headers/UserProfileInformation";
import UserProfileFriends from "../headers/UserProfileFriends";
import { AppContext } from "../../context/AppProvider";

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
  const { navPage, setNavPage } = useContext(AppContext);
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
        <ProfileHeader onPress={() => setNavPage(APP_PAGES.HOME)} />
      </View>
      <ScrollView style={{ marginTop: HEADER_HEIGHT }}>
        <UserProfileHeader />
        <Button title="Add to story" />
        <View style={{ borderWidth: 1, borderColor: "#eee", marginTop: 10 }} />
        <UserProfileInformation />
        <View style={{ borderWidth: 1, borderColor: "#eee", marginTop: 10 }} />
        <UserProfileFriends />
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
