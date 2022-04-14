import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  ScrollView,
  Image
} from "react-native";

import { APP_STYLE } from "../../context/settings";

import { AppContext } from "../../context/AppProvider";

export const HomeStatusCard = ({ item, index }) => {
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
    age,
    newStatus,
    setNewStatus
  } = React.useContext(AppContext);
  return (
    <View
      style={{
        backgroundColor: "white",
        marginLeft: 10,
        marginRight: 10,
        width: "100%"
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: profilePicture }}
          style={styles.userProfilePictureForStatusView}
          key={index}
        />
        <Text>
          {firstName}
          {""}
          {lastName}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create(APP_STYLE);
