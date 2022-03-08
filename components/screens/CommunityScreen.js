import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { APP_STYLE, HEADER_HEIGHT } from "../../context/settings";

import HomeHeader from "../headers/HomeHeader";

const CommunityScreen = () => {
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

export default CommunityScreen;

const styles = StyleSheet.create(APP_STYLE);
