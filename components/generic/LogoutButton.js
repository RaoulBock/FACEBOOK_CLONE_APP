import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const LogoutButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={{ backgroundColor: "red", padding: 8, borderRadius: 8 }}
        onPress={props.onPress}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({});
