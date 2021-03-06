import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  ScrollView
} from "react-native";
import React, { useContext } from "react";

import HomeHeader from "../headers/HomeHeader";
import HomeStatusBar from "../headers/HomeStatusBar";

import { AppContext, AppProvider } from "../../context/AppProvider";

import { APP_PAGES, APP_ICONS, APP_STYLE } from "../../context/settings";
import { HomeStatusCard } from "../cards/HomeStatusCard";

const HEADER_HEIGHT =
  Platform.OS === "ios" ? 115 : 70 + StatusBar.currentHeight;

const HomeScreen = () => {
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
    newStatus,
    setNewStatus
  } = useContext(AppContext);
  console.log(newStatus);
  return (
    <View>
      <View
        style={{
          backgroundColor: "#fff",
          elevation: 1000,
          zIndex: 1000
        }}
      >
        <View>
          <HomeHeader />
          <HomeStatusBar />
        </View>
        <View>
          <FlatList
            data={newStatus}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => "key" + index}
            renderItem={({ item }) => {
              return <HomeStatusCard item={item} />;
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create(APP_STYLE);
