import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useContext, useState } from "react";
import Button from "../../generic/Button";

import { APP_ICONS, APP_STYLE, APP_PAGES } from "../../../context/settings";
import { AppContext, AppProvider } from "../../../context/AppProvider";

import * as ImagePicker from "expo-image-picker";

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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setProfilePicture(result.uri);
    }
  };

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
        {/* <View style={styles.formControl}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View>
              <Button
                title="Pick an image from camera roll"
                onPress={pickImage}
              />
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200 }}
                />
              )}
            </View>
          </View>
        </View> */}
        <View style={styles.formControl}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View>
              {profilePicture === null ? (
                <Image
                  source={require("../../../assets/defaultProfilePicture.jpg")}
                  style={styles.userRegisterProfilePicture}
                />
              ) : (
                <Image
                  source={{ uri: profilePicture }}
                  style={styles.userRegisterProfilePicture}
                />
              )}
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  marginTop: -50,
                  marginLeft: 100
                }}
                onPress={pickImage}
              >
                {APP_ICONS.CAMERA}
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.userProfileName}>Raoul Bock</Text>
            </View>
          </View>
        </View>
      </View>
      <Button
        title="Go to profile"
        onPress={() => setNavPage(APP_PAGES.PROFILE)}
      />
    </View>
  );
};

export default UserRegisterProfilePicture;

const styles = StyleSheet.create(APP_STYLE);
