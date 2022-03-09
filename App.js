import React, { useContext, useEffect } from "react";

import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";

import { APP_PAGES } from "./context/settings";
import { AppProvider, AppContext } from "./context/AppProvider";
import LoginScreen from "./components/screens/LoginScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import HomeScreen from "./components/screens/HomeScreen";
import CommunityScreen from "./components/screens/CommunityScreen";
import SettingsScreen from "./components/screens/SettingsScreen";
import UserRegisterInformation from "./components/screens/registration/UserRegisterInformation";
const NavComp = () => {
  const { navPage, setNavPage } = useContext(AppContext);
  const onSetNavPage = (e) => {
    setNavPage(e);
  };

  useEffect(() => {
    console.log("App Nav: ", navPage);
  }, [navPage]);
  return (
    <SafeAreaView>
      <View>
        {navPage === APP_PAGES.LOGIN && (
          <LoginScreen setNavPage={onSetNavPage} />
        )}
        {navPage === APP_PAGES.HOME && <HomeScreen />}
        {navPage === APP_PAGES.PROFILE && <ProfileScreen />}
        {navPage === APP_PAGES.COMMUNITY && <CommunityScreen />}
        {navPage === APP_PAGES.SETTINGS && <SettingsScreen />}
        {navPage === APP_PAGES.USER_REGISTER && <UserRegisterInformation />}
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <AppProvider>
      <SafeAreaView>
        <NavComp />
      </SafeAreaView>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
