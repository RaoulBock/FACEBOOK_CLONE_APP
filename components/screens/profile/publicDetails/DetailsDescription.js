import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
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

const DetailsDescription = () => {
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
        text="Edit Details"
        textEvent="Save"
        onPressSave={() => console.log("Saved.")}
      />

      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 28 }}>
          Customize your information
        </Text>
        <Text style={{ color: "gray" }}>Details you select will be public</Text>
      </View>
      <View style={{ borderWidth: 1, borderColor: "#eee", marginTop: 10 }} />
      <View></View>
    </View>
  );
};

export default DetailsDescription;

const styles = StyleSheet.create({});
