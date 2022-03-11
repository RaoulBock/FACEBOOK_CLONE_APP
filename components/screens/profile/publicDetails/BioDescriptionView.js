import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import React, { useContext } from "react";

import {
  APP_PAGES,
  HEADER_HEIGHT,
  APP_ICONS,
  APP_STYLE
} from "../../../../context/settings";

import { AppContext, AppProvider } from "../../../../context/AppProvider";

import ProfileHeader from "../../../headers/ProfileHeader";
import DefaultHeader from "../../../headers/DefaultHeader";

const BioDescriptionView = () => {
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
      />
      <DefaultHeader
        onPress={() => setNavPage(APP_PAGES.USER_PROFILE_PUBLIC_DETAILS)}
        text="Edit Bio"
        textEvent="Save"
        onPressSave={() => console.log("Saved.")}
      />
      <View style={{ borderWidth: 1, borderColor: "#eee", marginTop: 10 }} />
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Image
            source={{ uri: profilePicture }}
            style={{ width: 60, height: 60, borderRadius: 500000 }}
          />

          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {firstName} {lastName}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {APP_ICONS.GLOBE}
              <Text style={{ marginLeft: 5 }}>Public</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: 20, marginRight: 20, marginTop: 15 }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#7B7B7C",
            borderRadius: 8,
            color: "black"
          }}
          placeholder="You can add a short bio to tell people more about yourself. This could be anything like a favroute quote or what makes you happy."
        ></TextInput>
      </View>
    </View>
  );
};

export default BioDescriptionView;

const styles = StyleSheet.create({});
