import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import { AppContext, AppProvider } from "../../../context/AppProvider";

import { APP_PAGES, APP_ICONS, APP_STYLE } from "../../../context/settings";

import DefaultHeader from "../../headers/DefaultHeader";

const NewStatusView = () => {
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
      <DefaultHeader
        onPress={() => setNavPage(APP_PAGES.USER_PROFILE_PUBLIC_DETAILS)}
        text="Create post"
        textEvent="Post"
        onPressSave={() => console.log("Saved.")}
      />
    </View>
  );
};

export default NewStatusView;

const styles = StyleSheet.create(APP_STYLE);
