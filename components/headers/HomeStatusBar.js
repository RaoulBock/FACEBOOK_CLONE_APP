import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import React, { useContext } from "react";

import { AppContext, AppProvider } from "../../context/AppProvider";
import { APP_PAGES, APP_ICONS, APP_STYLE } from "../../context/settings";

import Input from "../generic/Input";

const HomeStatusBar = () => {
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20,
          marginLeft: 10,
          marginRight: 15,
          marginBottom: 10
        }}
      >
        <TouchableOpacity onPress={() => setNavPage(APP_PAGES.NEW_STATUS)}>
          <Text style={styles.DefaultStatusInput}>Whats on your mind?</Text>
        </TouchableOpacity>
        <TouchableOpacity>{APP_ICONS.PHOTO}</TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeStatusBar;

const styles = StyleSheet.create(APP_STYLE);
