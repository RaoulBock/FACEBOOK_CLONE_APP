import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import { APP_ICONS, APP_PAGES } from "../../context/settings";
import Input from "../generic/Input";

import { AppContext, AppProvider } from "../../context/AppProvider";

const ProfileHeader = () => {
  const { navPage, setNavPage } = useContext(AppContext);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 40
      }}
    >
      <TouchableOpacity onPress={() => setNavPage(APP_PAGES.HOME)}>
        {APP_ICONS.BACK}
      </TouchableOpacity>
      <Input placeholder="Search" />
      <Text></Text>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
