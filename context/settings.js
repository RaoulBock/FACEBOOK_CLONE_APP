import React from "react";
import { MaterialIcons, Octicons, Entypo } from "react-native-vector-icons";

export const APP_PAGES = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  PROFILE: "PROFILE"
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
  )
};

export const APP_STYLE = {
  container: {},
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
    padding: "1.5%",
    borderRadius: 50
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
  }
};
