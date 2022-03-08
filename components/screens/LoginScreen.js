import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import { AppContext, AppProvider } from "../../context/AppProvider";
import { APP_PAGES } from "../../context/settings";

import { APP_STYLE } from "../../context/settings";
import { TouchableOpacity } from "react-native-web";
import Button from "../generic/Button";

const LoginScreen = () => {
  const { navPage, setNavPage } = useContext(AppContext);
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Login" onPress={() => setNavPage(APP_PAGES.PROFILE)} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create(APP_STYLE);
