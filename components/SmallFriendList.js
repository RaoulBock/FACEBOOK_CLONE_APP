import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { APP_STYLE } from "../context/settings";
import Button from "./generic/Button";

const SmallFriendList = () => {
  return (
    <View>
      <View style={styles.friendList}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/wallpaper.jpg")}
            style={styles.smallFriendsList}
          />
          <Text>Raoul Bock</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/wallpaper.jpg")}
            style={styles.smallFriendsList}
          />
          <Text>Raoul Bock</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/wallpaper.jpg")}
            style={styles.smallFriendsList}
          />
          <Text>Raoul Bock</Text>
        </View>
      </View>
      <View style={styles.friendList}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/wallpaper.jpg")}
            style={styles.smallFriendsList}
          />
          <Text>Raoul Bock</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/wallpaper.jpg")}
            style={styles.smallFriendsList}
          />
          <Text>Raoul Bock</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/wallpaper.jpg")}
            style={styles.smallFriendsList}
          />
          <Text>Raoul Bock</Text>
        </View>
      </View>
      <Button title="See all friends" />
      <View
        style={{ borderWidth: 1, marginTop: 10, borderColor: "#eee" }}
      ></View>
    </View>
  );
};

export default SmallFriendList;

const styles = StyleSheet.create(APP_STYLE);
