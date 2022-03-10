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
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber
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
        <Text style={styles.LoginHeader}>Hi. {firstName}</Text>
        <Text></Text>
      </View>
      <View>
        <View style={styles.formControl}>
          <Input
            placeholder="Email (Optional)"
            onChangeText={(email) => setEmail(email)}
            value={email}
          />
        </View>
        <View style={styles.formControl}>
          <Input
            placeholder="Phone number"
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
            keyboardType="numeric"
            value={phoneNumber}
          />
        </View>
      </View>
      <Button
        title="Continue"
        onPress={() => setNavPage(APP_PAGES.USER_REGISTER_GENERAL)}
      />
    </View>
  );
};

export default UserContactInformation;

const styles = StyleSheet.create(APP_STYLE);
