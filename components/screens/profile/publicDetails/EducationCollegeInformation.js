import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import { AppProvider, AppContext } from "../../../../context/AppProvider";
import { APP_PAGES, APP_ICONS, APP_STYLE } from "../../../../context/settings";

import DefaultHeader from "../../../headers/DefaultHeader";

import Input from "../../../generic/Input";

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
        onPress={() => setNavPage(APP_PAGES.PUBLIC_DETAILS.DETAILS)}
        text="Add colelge"
        textEvent="Save"
        onPressSave={() => setNavPage(APP_PAGES.USER_PROFILE_PUBLIC_DETAILS)}
      />
      <View style={{ borderWidth: 1, borderColor: "#eee", marginTop: 20 }} />
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <View style={{ fontSize: 78 }}>{APP_ICONS.SCHOOL}</View>
        <Input placeholder="College Name (Required)" />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 20,
          marginTop: 20,
          borderWidth: 1,
          width: 70,
          padding: 8,
          borderRadius: 12,
          backgroundColor: "#eee",
          borderColor: "#eee"
        }}
      >
        {APP_ICONS.GLOBE}
        <Text style={{ marginLeft: 5 }}>Public</Text>
      </View>
    </View>
  );
};

export default EducationCollegeInformation;

const styles = StyleSheet.create({});
