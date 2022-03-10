import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import ProfileHeader from "../../headers/ProfileHeader";
import {
  APP_PAGES,
  HEADER_HEIGHT,
  APP_ICONS,
  APP_STYLE
} from "../../../context/settings";

import { AppContext, AppProvider } from "../../../context/AppProvider";

const ProfileImageViewer = () => {
  console.log(profilePicture, "clicked");
};

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

const PublicDetails = () => {
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
  return (
    <View>
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: HEADER_HEIGHT,
          backgroundColor: "#fff",
          elevation: 1000,
          zIndex: 1000
        }}
      >
        <ProfileHeader onPress={() => setNavPage(APP_PAGES.PROFILE)} />
        <View style={{ borderWidth: 1, borderColor: "#eee", marginTop: 10 }} />
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 12
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Profile Picture
            </Text>
            <Text style={{ fontWeight: "300", fontSize: 18, color: "#40739e" }}>
              Edit
            </Text>
          </View>
          <View>
            {profilePicture === null ? (
              <Image
                source={require("../../../assets/defaultProfilePicture.jpg")}
                style={styles.EditUserProfilePicture}
                onPress={() => console.log("clicked")}
              />
            ) : (
              <TouchableOpacity onPress={ProfileImageViewer}>
                <Image
                  source={{ uri: profilePicture }}
                  style={styles.EditUserProfilePicture}
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
        </View>
        <View style={{ borderWidth: 1, borderColor: "#eee", marginTop: 20 }} />
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 12
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Bio</Text>
            <Text style={{ fontWeight: "300", fontSize: 18, color: "#40739e" }}>
              Add
            </Text>
          </View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default PublicDetails;

const styles = StyleSheet.create(APP_STYLE);
