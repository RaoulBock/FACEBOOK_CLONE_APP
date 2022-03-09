import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ProfileHeader from "../../headers/ProfileHeader";
import { APP_PAGES, HEADER_HEIGHT } from "../../../context/settings";

import { AppContext, AppProvider } from "../../../context/AppProvider";

const PublicDetails = () => {
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
      >
        <ProfileHeader onPress={() => setNavPage(APP_PAGES.PROFILE)} />
        <View style={{ borderWidth: 1, borderColor: "#eee", marginTop: 10 }} />
      </View>
    </View>
  );
};

export default PublicDetails;

const styles = StyleSheet.create({});
