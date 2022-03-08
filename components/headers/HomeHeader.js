import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import { APP_ICONS, APP_PAGES, APP_STYLE } from "../../context/settings";

import { AppContext, AppProvider } from "../../context/AppProvider";

const HomeHeader = () => {
  const { navPage, setNavPage } = useContext(AppContext);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 40,
        borderBottomWidth: 1,
        paddingBottom: 12,
        borderColor: "#718093"
      }}
    >
      <TouchableOpacity
        style={[
          navPage === APP_PAGES.HOME ? styles.isActive : styles.NotActive
        ]}
        onPress={() => setNavPage(APP_PAGES.HOME)}
      >
        {APP_ICONS.HOME}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          navPage === APP_PAGES.COMMUNITY ? styles.isActive : styles.NotActive
        ]}
        onPress={() => setNavPage(APP_PAGES.COMMUNITY)}
      >
        {APP_ICONS.COMMUNITY}
      </TouchableOpacity>
      <TouchableOpacity>{APP_ICONS.MESSAGE}</TouchableOpacity>
      <TouchableOpacity>{APP_ICONS.BRIEFCASE}</TouchableOpacity>
      <TouchableOpacity>{APP_ICONS.SETTINGS}</TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create(APP_STYLE);
