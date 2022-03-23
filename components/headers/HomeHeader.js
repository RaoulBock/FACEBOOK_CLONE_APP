import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import { APP_ICONS, APP_PAGES, APP_STYLE } from "../../context/settings";

import { AppContext, AppProvider } from "../../context/AppProvider";

const HomeHeader = () => {
  const { navPage, setNavPage } = useContext(AppContext);

  return (
    <View>
      <View
        style={{
          marginTop: 40,
          marginLeft: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: 20
        }}
      >
        <Text style={{ fontWeight: "bold", color: "#4b7bec", fontSize: 38 }}>
          Facebook
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => setNavPage(APP_PAGES.SEARCH)}
          >
            {APP_ICONS.SEARCH}
          </TouchableOpacity>
          <TouchableOpacity>{APP_ICONS.MESSAGE}</TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: 20,
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

        <TouchableOpacity>{APP_ICONS.BRIEFCASE}</TouchableOpacity>
        <TouchableOpacity
          style={[
            navPage === APP_PAGES.SETTINGS ? styles.isActive : styles.NotActive
          ]}
          onPress={() => setNavPage(APP_PAGES.SETTINGS)}
        >
          {APP_ICONS.HORIZONTALDOTS}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create(APP_STYLE);
