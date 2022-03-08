import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { APP_ICONS, APP_STYLE } from "../../context/settings";
import Button from "../generic/Button";

const UserProfileInformation = () => {
  return (
    <View>
      <TouchableOpacity style={{ padding: 8, marginLeft: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {APP_ICONS.SCHOOL}
          <Text style={styles.userInformation}>
            Went to Windhoek International School
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {APP_ICONS.LOCATION}
          <Text style={styles.userInformation}>From Windhoek, Namibia</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {APP_ICONS.HEART}
          <Text style={styles.userInformation}>Single</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {APP_ICONS.CALENDER}
          <Text style={styles.userInformation}>Joined August 2013</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {APP_ICONS.HORIZONTALDOTS}
          <Text style={styles.userInformation}>See your about information</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#dff9fb",
          padding: 8,
          alignItems: "center",
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 50000000
        }}
      >
        <Text style={{ fontWeight: "800", color: "#40739e" }}>
          Edit public details
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfileInformation;

const styles = StyleSheet.create(APP_STYLE);