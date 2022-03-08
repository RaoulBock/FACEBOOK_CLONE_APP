import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import { APP_STYLE, HEADER_HEIGHT } from "../../context/settings";

import HomeHeader from "../headers/HomeHeader";

import { AppContext, AppProvider } from "../../context/AppProvider";

import { APP_PAGES } from "../../context/settings";

const SettingsScreen = () => {
  const { navPage, setNavPage } = useContext(AppContext);
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
        <HomeHeader />
        <View style={{ margin: 18 }}>
          <Text style={styles.header}>Menu</Text>
          <View
            style={{
              marginTop: 20
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => setNavPage(APP_PAGES.PROFILE)}
            >
              <Image
                source={require("../../assets/defaultProfilePicture.jpg")}
                style={{ width: 60, height: 60, borderRadius: 500000 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  Raoul Bock
                </Text>
                <Text>See your profile</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{ borderWidth: 1, borderColor: "#eee", marginTop: 10 }}
            />
            <View style={{ marginTop: 20 }}>
              <Text style={styles.header}>All Shortcuts</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create(APP_STYLE);
