import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DefaultHeader from "../../../headers/DefaultHeader";

const AddWork = () => {
  return (
    <View>
      <DefaultHeader
        onPress={() => setNavPage(APP_PAGES.USER_PROFILE_PUBLIC_DETAILS)}
        text="Add work"
        textEvent="Save"
        onPressSave={() => console.log("Saved.")}
      />
    </View>
  );
};

export default AddWork;

const styles = StyleSheet.create({});
