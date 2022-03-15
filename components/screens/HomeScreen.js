import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";

import HomeHeader from "../headers/HomeHeader";
import HomeStatusBar from "../headers/HomeStatusBar";

const HEADER_HEIGHT =
  Platform.OS === "ios" ? 115 : 70 + StatusBar.currentHeight;

const HomeScreen = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#fff",
          elevation: 1000,
          zIndex: 1000
        }}
      >
        <View>
          <HomeHeader />
          <HomeStatusBar />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
