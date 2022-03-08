import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { APP_STYLE } from "../../context/settings";

const UserProfileHeader = () => {
  return (
    <View>
      <Image
        source={require("../../assets/wallpaper.jpg")}
        style={styles.userCoverPicture}
      />
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("../../assets/defaultProfilePicture.jpg")}
          style={styles.userProfilePicture}
        />
      </View>
    </View>
  );
};

export default UserProfileHeader;

const styles = StyleSheet.create(APP_STYLE);
