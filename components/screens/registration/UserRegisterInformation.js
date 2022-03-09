import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import Input from "../../generic/Input";
import Button from "../../generic/Button";

import { APP_STYLE, APP_ICONS, APP_PAGES } from "../../../context/settings";

import { AppContext, AppProvider } from "../../../context/AppProvider";

const UserRegisterInformation = () => {
  const { navPage, setNavPage } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 30 }}>
        <TouchableOpacity onPress={() => setNavPage(APP_PAGES.LOGIN)}>
          {APP_ICONS.BACK}
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.LoginHeader}>Create account.</Text>
      </View>
      <View>
        <View style={styles.formControl}>
          <Input placeholder="First name" />
        </View>
        <View style={styles.formControl}>
          <Input placeholder="Last name" />
        </View>
        <View style={styles.formControl}>
          <Input placeholder="Phone number" />
        </View>
        <View style={styles.formControl}>
          <Input placeholder="Email" />
        </View>
      </View>
      <Button title="Continue" />
    </View>
  );
};

export default UserRegisterInformation;

const styles = StyleSheet.create(APP_STYLE);
