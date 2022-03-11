import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import { APP_ICONS, APP_PAGES } from "../../context/settings";
import Input from "../generic/Input";

import { AppContext, AppProvider } from "../../context/AppProvider";
const DefaultHeader = (props) => {
  const { navPage, setNavPage } = useContext(AppContext);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20
      }}
    >
      <TouchableOpacity onPress={props.onPress}>
        {APP_ICONS.BACK}
      </TouchableOpacity>
      <Text style={{ fontSize: 18 }}>{props.text}</Text>
      <TouchableOpacity onPress={props.onPressSave}>
        <Text style={{ fontWeight: "bold" }}>{props.textEvent}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DefaultHeader;

const styles = StyleSheet.create({});
