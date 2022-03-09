import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import Input from "../../generic/Input";
import Button from "../../generic/Button";

import { APP_ICONS, APP_STYLE, APP_PAGES } from "../../../context/settings";
import { AppContext, AppProvider } from "../../../context/AppProvider";

const UserContactInformation = () => {
  const {
    navPage,
    setNavPage,
    firstName,
    setFirstName,
    lastName,
    setLastName
  } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          marginBottom: 30,
          flexDirection: "row",
          marginLeft: 20,
          justifyContent: "space-between"
        }}
      >
        <TouchableOpacity onPress={() => setNavPage(APP_PAGES.USER_REGISTER)}>
          {APP_ICONS.BACK}
        </TouchableOpacity>
        <Text style={styles.LoginHeader}>Hi. {firstName}.</Text>
        <Text></Text>
      </View>
      <View>
        <View style={styles.formControl}>
          <Input placeholder="Email" />
        </View>
        <View style={styles.formControl}>
          <Input placeholder="Phone number" />
        </View>
      </View>
      <Button
        title="Continue"
        onPress={() => setNavPage(APP_PAGES.USER_REGISTER_CONTACT)}
      />
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontWeight: "bold" }}>Already have an account?</Text>
        <Button title="Login" onPress={() => setNavPage(APP_PAGES.LOGIN)} />
      </View>
    </View>
  );
};

export default UserContactInformation;

const styles = StyleSheet.create(APP_STYLE);
