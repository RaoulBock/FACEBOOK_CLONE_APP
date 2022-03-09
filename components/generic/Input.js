import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

import { APP_STYLE } from "../../context/settings";

const Input = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        placeholder={props.placeholder}
        style={styles.DefaultInput}
        onChangeText={props.onChangeText}
        onPress={props.onPress}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create(APP_STYLE);
