import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import {
  APP_PAGES,
  HEADER_HEIGHT,
  APP_ICONS,
  APP_STYLE
} from "../../../../context/settings";

import { AppContext, AppProvider } from "../../../../context/AppProvider";

import ProfileHeader from "../../../headers/ProfileHeader";
import DefaultHeader from "../../../headers/DefaultHeader";

const BioDescriptionView = () => {
  const {
    navPage,
    setNavPage,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    profilePicture,
    setProfilePicture,
    coverPicture,
    setCoverPicture
  } = useContext(AppContext);
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
      />
      <DefaultHeader
        onPress={() => setNavPage(APP_PAGES.USER_PROFILE_PUBLIC_DETAILS)}
        text="Edit Bio"
        textEvent="Save"
        onPressSave={() => console.log("Saved.")}
      />
      <View style={{ borderWidth: 1, borderColor: "#eee", marginTop: 10 }} />
      <View></View>
    </View>
  );
};

export default BioDescriptionView;

const styles = StyleSheet.create({});
