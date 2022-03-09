import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import { AppContext, AppProvider } from "../../context/AppProvider";

import { APP_STYLE, APP_PAGES } from "../../context/settings";
import Button from "../generic/Button";
import Input from "../generic/Input";

const LoginScreen = () => {
  const { navPage, setNavPage } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.LoginHeader}>FaceBook</Text>
      </View>
      <View>
        <View style={styles.formControl}>
          <Input placeholder="Username, Someone@something.com" />
        </View>
        <View style={styles.formControl}>
          <Input placeholder="••••••••" />
        </View>
        <View style={{ marginRight: 50, alignItems: "flex-end" }}>
          <Text style={{ fontWeight: "bold" }}>Forgot password ?</Text>
        </View>
      </View>
      <Button title="Login" onPress={() => setNavPage(APP_PAGES.PROFILE)} />
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontWeight: "bold" }}>Don't have an account yet?</Text>
        <Button
          title="Create an account"
          onPress={() => setNavPage(APP_PAGES.PROFILE)}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create(APP_STYLE);
