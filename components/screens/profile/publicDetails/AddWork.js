import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import DefaultHeader from "../../../headers/DefaultHeader";

import { APP_ICONS, APP_STYLE, APP_PAGES } from "../../../../context/settings";
import Input from "../../../generic/Input";

import { AppContext, AppProvider } from "../../../../context/AppProvider";

const AddWork = () => {
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
        text="Add work"
        textEvent="Save"
        onPressSave={() => setNavPage(APP_PAGES.USER_PROFILE_PUBLIC_DETAILS)}
      />
      <View style={{ borderWidth: 1, borderColor: "#eee", marginTop: 10 }} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10
        }}
      >
        <Text>{APP_ICONS.BRIEFCASE}</Text>
        <Input
          placeholder="Workplace Name | School Name"
          onChangeText={(work) => setWork(work)}
        />
      </View>
    </View>
  );
};

export default AddWork;

const styles = StyleSheet.create(APP_STYLE);
