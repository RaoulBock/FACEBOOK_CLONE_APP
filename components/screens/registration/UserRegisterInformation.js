import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import Input from "../../generic/Input";
import Button from "../../generic/Button";

import { APP_STYLE, APP_ICONS, APP_PAGES } from "../../../context/settings";

import { AppContext, AppProvider } from "../../../context/AppProvider";

const UserRegisterInformation = () => {
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
        <TouchableOpacity onPress={() => setNavPage(APP_PAGES.LOGIN)}>
          {APP_ICONS.BACK}
        </TouchableOpacity>
        <Text style={styles.LoginHeader}>Let's get you started.</Text>
        <Text></Text>
      </View>
      <View>
        <View style={styles.formControl}>
          <Input
            placeholder="First name"
            onChangeText={(firstName) => setFirstName(firstName)}
            value={firstName}
          />
        </View>
        <View style={styles.formControl}>
          <Input
            placeholder="Last name"
            onChangeText={(lastName) => setLastName(lastName)}
            value={lastName}
          />
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

export default UserRegisterInformation;

const styles = StyleSheet.create(APP_STYLE);
