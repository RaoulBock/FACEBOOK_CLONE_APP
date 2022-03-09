import { Button, Image, View, Platform } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import * as ImagePicker from "expo-image-picker";

import { AppContext, AppProvider } from "../context/AppProvider";

import { APP_PAGES, APP_ICONS, APP_STYLE } from "../context/settings";

const ProfileImagePicker = () => {
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
    setProfilePicture
  } = useContext(AppContext);
  return (
    <View>
      <Text>ProfileImagePicker</Text>
    </View>
  );
};

export default ProfileImagePicker;

const styles = StyleSheet.create({});
