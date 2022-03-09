import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useContext, useState } from "react";
import Button from "../../generic/Button";

import { APP_ICONS, APP_STYLE, APP_PAGES } from "../../../context/settings";
import { AppContext, AppProvider } from "../../../context/AppProvider";

const UserRegisterProfilePicture = () => {
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
    setPhoneNumber,
    profilePicture,
    setProfilePicture
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
        <Text style={styles.LoginHeader}>
          Hi. {firstName},
          <Text style={{ fontSize: 14, letterSpacing: 0, fontWeight: "100" }}>
            you are almost done.
          </Text>
        </Text>
        <Text></Text>
      </View>
      <View>
        <View style={styles.formControl}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View>
              <Image
                source={require("../../../assets/defaultProfilePicture.jpg")}
                style={styles.userRegisterProfilePicture}
              />
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  marginTop: -50,
                  marginLeft: 100
                }}
              >
                {APP_ICONS.CAMERA}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.formControl}></View>
      </View>
      <Button
        title="Go to profile"
        onPress={() => setNavPage(APP_PAGES.USER_REGISTER_PROFILEPICTURE)}
      />
    </View>
  );
};

export default UserRegisterProfilePicture;

const styles = StyleSheet.create(APP_STYLE);
