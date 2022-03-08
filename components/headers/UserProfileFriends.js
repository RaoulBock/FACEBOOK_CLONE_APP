import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import SmallFriendList from "../SmallFriendList";

const UserProfileFriends = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10
        }}
      >
        <View>
          <Text style={{ fontWeight: "700", fontSize: 18, lineHeight: 40 }}>
            Friends
          </Text>
          <Text>4,851 friends</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: "#40739e", fontWeight: "800" }}>
            Find Friends
          </Text>
        </TouchableOpacity>
      </View>
      <SmallFriendList />
    </View>
  );
};

export default UserProfileFriends;

const styles = StyleSheet.create({});
