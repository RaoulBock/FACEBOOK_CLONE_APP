import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import { AppProvider, AppContext } from "../../../../context/AppProvider";
import { APP_PAGES, APP_ICONS, APP_STYLE } from "../../../../context/settings";

import DefaultHeader from "../../../headers/DefaultHeader";

const EducationCollegeInformation = () => {
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
        text="Add college"
        onPress={() => setNavPage(APP_PAGES.PUBLIC_DETAILS.DETAILS)}
        textEvent="Save"
        onPressSave={() => setNavPage(APP_PAGES.PUBLIC_DETAILS.DETAILS)}
      />
    </View>
  );
};

export default EducationCollegeInformation;

const styles = StyleSheet.create({});
