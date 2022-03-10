import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import { APP_ICONS, APP_STYLE } from "../../context/settings";

import { AppContext, AppProvider } from "../../context/AppProvider";

import * as ImagePicker from "expo-image-picker";

const UserProfileHeader = () => {
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
    setProfilePicture,
    coverPicture,
    setCoverPicture
  } = useContext(AppContext);

  const UserProfilePicture = async () => {
    // No permissions request is necessary for launching the image library
    let Profileresult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(Profileresult);

    if (!Profileresult.cancelled) {
      setProfilePicture(Profileresult.uri);
    }
  };

  const UserCoverPicture = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setCoverPicture(result.uri);
    }
  };

  const ProfileImageViewer = () => {
    console.log(profilePicture, "clicked");
  };

  return (
    <View>
      {/* <View>
        {coverPicture === null ? (
          <Image
            source={require("../../assets/wallpaper.jpg")}
            style={styles.userCoverPicture}
          />
        ) : (
          <Image
            source={{ uri: coverPicture }}
            style={styles.userCoverPicture}
          />
        )}
        <TouchableOpacity
          style={{ alignItems: "center", marginTop: -50, marginLeft: 350 }}
          onPress={UserCoverPicture}
        >
          {APP_ICONS.CAMERA}
        </TouchableOpacity>
      </View> */}
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View>
          {profilePicture === null ? (
            <Image
              source={require("../../assets/defaultProfilePicture.jpg")}
              style={styles.userProfilePicture}
              onPress={() => console.log("clicked")}
            />
          ) : (
            <TouchableOpacity onPress={ProfileImageViewer}>
              <Image
                source={{ uri: profilePicture }}
                style={styles.userProfilePicture}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={{ alignItems: "center", marginTop: -50, marginLeft: 100 }}
            onPress={UserProfilePicture}
          >
            {APP_ICONS.CAMERA}
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.userProfileName}>Raoul Bock</Text>
        </View>
      </View>
    </View>
  );
};

export default UserProfileHeader;

const styles = StyleSheet.create(APP_STYLE);
