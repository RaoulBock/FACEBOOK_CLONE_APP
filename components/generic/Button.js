import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { APP_STYLE } from "../../context/settings";

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.Button}>
      <Text style={styles.ButtonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create(APP_STYLE);
