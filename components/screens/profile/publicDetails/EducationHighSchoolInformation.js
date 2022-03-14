import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import { AppProvider, AppContext } from "../../../../context/AppProvider";
import { APP_PAGES, APP_ICONS, APP_STYLE } from "../../../../context/settings";

import DefaultHeader from "../../../headers/DefaultHeader";

const EducationHighSchoolInformation = () => {
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
    setCoverPicture,
    work,
    setWork
  } = useContext(AppContext);
  return (
    <View>
      <DefaultHeader
        onPress={() => setNavPage(APP_PAGES.USER_PROFILE_PUBLIC_DETAILS)}
        text="Add high school"
        textEvent="Save"
        onPressSave={() => setNavPage(APP_PAGES.USER_PROFILE_PUBLIC_DETAILS)}
      />
      <View style={{ borderWidth: 1, borderColor: "#eee", marginTop: 20 }} />
    </View>
  );
};

export default EducationHighSchoolInformation;

const styles = StyleSheet.create({});
