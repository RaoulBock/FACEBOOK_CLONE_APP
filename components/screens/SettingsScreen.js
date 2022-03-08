import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { APP_STYLE, HEADER_HEIGHT } from "../../context/settings";

import HomeHeader from "../headers/HomeHeader";

const SettingsScreen = () => {
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
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
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
          </View>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create(APP_STYLE);
