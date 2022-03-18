import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { APP_STYLE, APP_ICONS, APP_PAGES } from "../../../context/settings";

const StoriesView = () => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#ededed",
        padding: 12,
        marginTop: 20
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
            marginLeft: 20,
            color: "#4b7bec"
          }}
        >
          Stories
        </Text>
        <TouchableOpacity style={{ marginRight: 20 }}>
          <Text>See all</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StoriesView;

const styles = StyleSheet.create(APP_STYLE);
