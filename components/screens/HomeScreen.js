import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";

import HomeHeader from "../headers/HomeHeader";

const HEADER_HEIGHT =
  Platform.OS === "ios" ? 115 : 70 + StatusBar.currentHeight;

const HomeScreen = () => {
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
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
