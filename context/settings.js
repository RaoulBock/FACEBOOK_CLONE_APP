import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from "react-native";

import {
  MaterialIcons,
  Octicons,
  Entypo,
  Feather
} from "react-native-vector-icons";

const HEADER_HEIGHT =
  Platform.OS === "ios" ? 115 : 70 + StatusBar.currentHeight;

export const APP_PAGES = {
  LOGIN: "LOGIN",
  HOME: "HOME",
  PROFILE: "PROFILE",
  COMMUNITY: "COMMUNITY",
  SETTINGS: "SETTINGS"
};

export const APP_ICONS = {
  BACK: (
    <MaterialIcons
      name="keyboard-backspace"
      style={{
        fontSize: 28,
        color: "#000"
      }}
    />
  ),
  CAMERA: (
    <MaterialIcons
      name="photo-camera"
      style={{
        color: "#000",
        fontSize: 30,
        backgroundColor: "#eee",
        padding: 5,
        borderRadius: 500000
      }}
    />
  ),
  HEART: (
    <Octicons
      name="heart"
      style={{
        color: "gray",
        fontSize: 18
      }}
    />
  ),
  BADGE: (
    <Octicons
      name="briefcase"
      style={{
        color: "gray",
        fontSize: 18
      }}
    />
  ),
  SCHOOL: (
    <Octicons
      name="mortar-board"
      style={{
        color: "gray",
        fontSize: 18
      }}
    />
  ),
  CALENDER: (
    <Octicons
      name="calendar"
      style={{
        color: "gray",
        fontSize: 18
      }}
    />
  ),
  LOCATION: (
    <Octicons
      name="location"
      style={{
        color: "gray",
        fontSize: 18
      }}
    />
  ),
  HORIZONTALDOTS: (
    <Entypo
      name="dots-three-horizontal"
      style={{
        color: "gray",
        fontSize: 18
      }}
    />
  ),
  HOME: (
    <Feather
      name="home"
      style={{
        color: "gray",
        fontSize: 28
      }}
    />
  ),
  COMMUNITY: (
    <Feather
      name="users"
      style={{
        color: "gray",
        fontSize: 28
      }}
    />
  ),
  SETTINGS: (
    <Feather
      name="tool"
      style={{
        color: "gray",
        fontSize: 28
      }}
    />
  ),
  MESSAGE: (
    <Feather
      name="message-circle"
      style={{
        color: "gray",
        fontSize: 28
      }}
    />
  ),
  BRIEFCASE: (
    <Feather
      name="briefcase"
      style={{
        color: "gray",
        fontSize: 28
      }}
    />
  )
};

export const APP_STYLE = {
  container: {
    marginTop: 100
  },
  Button: {
    backgroundColor: "#3867d6",
    padding: 10,
    alignItems: "center",
    borderRadius: 50000,
    marginTop: 18,
    marginLeft: 20,
    marginRight: 20
  },
  ButtonText: {
    color: "white"
  },
  DefaultInput: {
    backgroundColor: "#eee",
    width: 300,
    padding: "1.9%",
    borderRadius: 10
  },
  userCoverPicture: {
    height: 300
  },
  userProfilePicture: {
    borderRadius: 50000,
    width: 200,
    height: 200,
    marginTop: -100,
    borderWidth: 5,
    borderColor: "white"
  },
  userProfileName: {
    fontWeight: "600",
    fontSize: 28
  },
  userInformation: {
    fontWeight: "500",
    lineHeight: 55,
    fontSize: 18,
    paddingLeft: 10
  },
  friendList: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  smallFriendsList: {
    width: 100,
    height: 100,
    borderRadius: 18,
    margin: 10
  },
  isActive: {
    borderBottomWidth: 2,
    borderColor: "#40739e"
  },
  header: {
    fontWeight: "bold",
    fontSize: 20
  },
  formControl: {
    margin: 10
  },
  LoginHeader: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#3867d6",
    letterSpacing: 9,
    textTransform: "uppercase"
  }
};
