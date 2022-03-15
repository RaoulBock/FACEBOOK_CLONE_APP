import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import React, { useContext, useState } from "react";

import {
  APP_PAGES,
  HEADER_HEIGHT,
  APP_ICONS,
  APP_STYLE
} from "../../../../context/settings";

import { AppContext, AppProvider } from "../../../../context/AppProvider";

import ProfileHeader from "../../../headers/ProfileHeader";
import DefaultHeader from "../../../headers/DefaultHeader";
import Button from "../../../generic/Button";

const DetailsDescription = () => {
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
    setCoverPicture,
    work,
    setWork,
    education,
    setEducation,
    college,
    setCollege,
    currentCity,
    setCurrentCity,
    homeTown,
    setHomeTown,
    relationShip,
    setRelationShip
  } = useContext(AppContext);

  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <DefaultHeader
        onPress={() => setNavPage(APP_PAGES.USER_PROFILE_PUBLIC_DETAILS)}
        text="Edit Details"
        textEvent="Save"
        onPressSave={() => console.log("Saved.")}
      />
      <View style={{ borderWidth: 1, borderColor: "#eee", marginTop: 10 }} />
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 28 }}>
          Customize your information
        </Text>
        <Text style={{ color: "gray" }}>Details you select will be public</Text>
      </View>
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
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Work</Text>
          {work === "" ? (
            <Text style={{ fontWeight: "300", fontSize: 18, color: "#40739e" }}>
              Add
            </Text>
          ) : null}
        </View>
        <View style={{ marginLeft: 20 }}>
          {work === "" ? (
            <Button
              title="Add Job"
              onPress={() => setNavPage(APP_PAGES.EDIT_DERAILS.WORK)}
            />
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginRight: 20
              }}
            >
              <TouchableOpacity></TouchableOpacity>
              <Text style={{ fontWeight: "200", fontSize: 18, marginTop: 10 }}>
                {work}
              </Text>
              <TouchableOpacity>{APP_ICONS.PENCIL}</TouchableOpacity>
            </View>
          )}
          <Button
            title="Add Job"
            onPress={() => setNavPage(APP_PAGES.EDIT_DERAILS.WORK)}
          />
        </View>
      </View>
      <View style={{ borderWidth: 1, borderColor: "#eee", marginTop: 20 }} />
    </View>
  );
};

export default DetailsDescription;

const styles = StyleSheet.create({});
