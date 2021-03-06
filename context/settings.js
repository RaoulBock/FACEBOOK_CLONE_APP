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
  Feather,
  MaterialCommunityIcons,
  AntDesign
} from "react-native-vector-icons";

const HEADER_HEIGHT =
  Platform.OS === "ios" ? 115 : 70 + StatusBar.currentHeight;

export const APP_PAGES = {
  LOGIN: "LOGIN",
  HOME: "HOME",
  PROFILE: "PROFILE",
  COMMUNITY: "COMMUNITY",
  SETTINGS: "SETTINGS",
  USER_REGISTER: "USER_REGISTER",
  USER_REGISTER_CONTACT: "USER_REGISTER_CONTACT",
  USER_REGISTER_GENERAL: "USER_REGISTER_GENERAL",
  USER_REGISTER_PROFILEPICTURE: "USER_REGISTER_PROFILEPICTURE",
  USER_PROFILE_PUBLIC_DETAILS: "USER_PROFILE_PUBLIC_DETAILS",
  PUBLIC_DETAILS: {
    BIO: "BIO",
    DETAILS: "DETAILS"
  },
  EDIT_DERAILS: {
    WORK: "WORK"
  },
  EDUCATION: {
    HIGH_SCHOOL: "HIGH_SCHOOL",
    COLLEGE: "COLLEGE"
  },
  LOCATION: {
    CURRENT_CITY: "CURRENT_CITY",
    HOMETOWN: "HOMETOWN"
  },
  RELATIONSHIP: "RELATIONSHIP",
  NEW_STATUS: "NEW_STATUS",
  SEARCH: "SEARCH"
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
  ),
  GLOBE: (
    <Octicons
      name="globe"
      style={{
        color: "gray",
        fontSize: 18
      }}
    />
  ),
  PENCIL: (
    <MaterialCommunityIcons
      name="pencil"
      style={{
        color: "gray",
        fontSize: 18
      }}
    />
  ),
  PHOTO: (
    <AntDesign
      name="picture"
      style={{
        color: "gray",
        fontSize: 18
      }}
    />
  ),
  SEARCH: (
    <AntDesign
      name="search1"
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
    borderRadius: 10,
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
  DefaultStatusInput: {
    backgroundColor: "#eee",
    width: 300,
    padding: 15,
    borderRadius: 10
  },
  userCoverPicture: {
    height: 300
  },
  userProfilePicture: {
    borderRadius: 50000,
    width: 200,
    height: 200,

    borderWidth: 5,
    borderColor: "white"
  },
  EditUserProfilePicture: {
    borderRadius: 50000,
    width: 200,
    height: 200,
    borderWidth: 5,
    borderColor: "white",
    marginLeft: 80
  },
  userCoverPicture: {
    width: "100%",
    height: 400,
    marginTop: -100,
    borderWidth: 5,
    borderColor: "white"
  },
  userRegisterProfilePicture: {
    borderRadius: 50000,
    width: 200,
    height: 200,
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
    marginLeft: 5
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
    fontSize: 40,
    fontWeight: "bold",
    color: "#3867d6",
    letterSpacing: 4,
    textTransform: "uppercase"
  },
  genderPicker: {
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
    width: 300,
    marginLeft: 45
  },
  userProfilePictureForStatusView: {
    width: 40,
    height: 40,
    borderRadius: 50
  }
};
