import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UserProfileFriends = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 12
      }}
    >
      <View>
        <Text style={{ fontWeight: "700", fontSize: 18, lineHeight: 40 }}>
          Friends
        </Text>
        <Text>4,851 friends</Text>
      </View>
      <Text style={{ color: "#40739e", fontWeight: "800" }}>Find Friends</Text>
    </View>
  );
};

export default UserProfileFriends;

const styles = StyleSheet.create({});
