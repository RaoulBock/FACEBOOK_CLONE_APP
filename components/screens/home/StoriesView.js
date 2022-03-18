import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { APP_STYLE, APP_ICONS, APP_PAGES } from "../../../context/settings";

const StoriesView = () => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#eee",
        padding: 12,
        marginTop: 20
      }}
    >
      <View>
        <Text>Stories</Text>
      </View>
    </View>
  );
};

export default StoriesView;

const styles = StyleSheet.create(APP_STYLE);
