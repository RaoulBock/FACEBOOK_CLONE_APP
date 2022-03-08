import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { APP_ICONS, APP_STYLE } from "../../context/settings";

const UserProfileHeader = () => {
  return (
    <View>
      <View>
        <Image
          source={require("../../assets/wallpaper.jpg")}
          style={styles.userCoverPicture}
        />
        <TouchableOpacity
          style={{ alignItems: "center", marginTop: -50, marginLeft: 350 }}
        >
          {APP_ICONS.CAMERA}
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View>
          <Image
            source={require("../../assets/defaultProfilePicture.jpg")}
            style={styles.userProfilePicture}
          />
          <TouchableOpacity
            style={{ alignItems: "center", marginTop: -50, marginLeft: 100 }}
          >
            {APP_ICONS.CAMERA}
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.userProfileName}>Raoul Bock</Text>
        </View>
      </View>
    </View>
  );
};

export default UserProfileHeader;

const styles = StyleSheet.create(APP_STYLE);
