import React from "react";
import { MaterialIcons } from "react-native-vector-icons";

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
  )
};

export const APP_STYLE = {
  container: {},
  Button: {
    backgroundColor: "red"
  },
  ButtonText: {
    color: "white"
  },
  DefaultInput: {
    backgroundColor: "white",
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
  }
};
