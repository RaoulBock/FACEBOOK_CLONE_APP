import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import React, { useContext } from "react";

import { AppContext, AppProvider } from "../../../context/AppProvider";

import { APP_PAGES, APP_ICONS, APP_STYLE } from "../../../context/settings";

import DefaultHeader from "../../headers/DefaultHeader";

const NewStatusView = () => {
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
      <DefaultHeader
        onPress={() => setNavPage(APP_PAGES.HOME)}
        text="Create post"
        textEvent="Post"
        onPressSave={() => console.log("Post.")}
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
      <View
        style={{
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20
        }}
      >
        <TextInput
          multiline
          numberOfLines={4}
          //   onChangeText={(text) => onChangeText(text)}
          //   value={value}
          style={{
            padding: 10,
            fontSize: 28,
            textAlign: "auto"
          }}
          placeholder="Whats on your mind?"
        />
      </View>
      <View style={{ marginTop: 50 }}>
        <TouchableOpacity
          style={{
            padding: 15,
            borderWidth: 1,
            borderColor: "#eee",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Text>{APP_ICONS.PHOTO}</Text>
          <Text style={{ marginLeft: 20 }}>Photo/Video</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 15,
            borderWidth: 1,
            borderColor: "#eee",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Text>{APP_ICONS.COMMUNITY}</Text>
          <Text style={{ marginLeft: 20 }}>Tag</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewStatusView;

const styles = StyleSheet.create(APP_STYLE);
