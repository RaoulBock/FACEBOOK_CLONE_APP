import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { APP_ICONS } from "../../context/settings";
import Input from "../generic/Input";

const ProfileHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 40
      }}
    >
      <TouchableOpacity>{APP_ICONS.BACK}</TouchableOpacity>
      <Input placeholder="Search" />
      <Text></Text>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
