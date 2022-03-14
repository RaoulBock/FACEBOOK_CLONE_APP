import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  CheckBox
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
    setWork
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
          ) : (
            <Text style={{ fontWeight: "300", fontSize: 18, color: "#40739e" }}>
              Edit
            </Text>
          )}
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
                justifyContent: "center"
              }}
            >
              <Text>{work}</Text>
            </View>
          )}
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
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Education</Text>
          {work === "" ? (
            <Text style={{ fontWeight: "300", fontSize: 18, color: "#40739e" }}>
              Add
            </Text>
          ) : (
            <Text style={{ fontWeight: "300", fontSize: 18, color: "#40739e" }}>
              Edit
            </Text>
          )}
        </View>
        <View style={{ marginLeft: 20 }}>
          {work === "" ? (
            <View>
              <Button
                title="Add a high school"
                onPress={() => setNavPage(APP_PAGES.EDUCATION.HIGH_SCHOOL)}
              />
              <Button
                title="Add a college"
                onPress={() => setNavPage(APP_PAGES.EDUCATION.COLLEGE)}
              />
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text>{work}</Text>
              <Button
                title="Add a high school"
                onPress={() => setNavPage(APP_PAGES.EDIT_DERAILS.WORK)}
              />
              <Button
                title="Add a high school"
                onPress={() => setNavPage(APP_PAGES.EDIT_DERAILS.WORK)}
              />
            </View>
          )}
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
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Current City</Text>
          {work === "" ? (
            <Text style={{ fontWeight: "300", fontSize: 18, color: "#40739e" }}>
              Add
            </Text>
          ) : (
            <Text style={{ fontWeight: "300", fontSize: 18, color: "#40739e" }}>
              Edit
            </Text>
          )}
        </View>
        <View style={{ marginLeft: 20 }}>
          {work === "" ? (
            <View>
              <Button
                title="Add current city"
                onPress={() => setNavPage(APP_PAGES.EDIT_DERAILS.WORK)}
              />
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text>{work}</Text>
              <Button
                title="Add a high school"
                onPress={() => setNavPage(APP_PAGES.EDIT_DERAILS.WORK)}
              />
              <Button
                title="Add college"
                onPress={() => setNavPage(APP_PAGES.EDIT_DERAILS.WORK)}
              />
            </View>
          )}
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
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Hometown</Text>
          {work === "" ? (
            <Text style={{ fontWeight: "300", fontSize: 18, color: "#40739e" }}>
              Add
            </Text>
          ) : (
            <Text style={{ fontWeight: "300", fontSize: 18, color: "#40739e" }}>
              Edit
            </Text>
          )}
        </View>
        <View style={{ marginLeft: 20 }}>
          {work === "" ? (
            <View>
              <Button
                title="Add current city"
                onPress={() => setNavPage(APP_PAGES.EDIT_DERAILS.WORK)}
              />
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text>{work}</Text>
              <Button
                title="Add a high school"
                onPress={() => setNavPage(APP_PAGES.EDIT_DERAILS.WORK)}
              />
              <Button
                title="Add college"
                onPress={() => setNavPage(APP_PAGES.EDIT_DERAILS.WORK)}
              />
            </View>
          )}
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
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Relationship</Text>
          {work === "" ? (
            <Text style={{ fontWeight: "300", fontSize: 18, color: "#40739e" }}>
              Add
            </Text>
          ) : (
            <Text style={{ fontWeight: "300", fontSize: 18, color: "#40739e" }}>
              Edit
            </Text>
          )}
        </View>
        <View style={{ marginLeft: 20 }}>
          {work === "" ? (
            <View>
              <Button
                title="Add current city"
                onPress={() => setNavPage(APP_PAGES.EDIT_DERAILS.WORK)}
              />
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text>{work}</Text>
              <Button
                title="Add a high school"
                onPress={() => setNavPage(APP_PAGES.EDIT_DERAILS.WORK)}
              />
              <Button
                title="Add college"
                onPress={() => setNavPage(APP_PAGES.EDIT_DERAILS.WORK)}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default DetailsDescription;

const styles = StyleSheet.create({});
