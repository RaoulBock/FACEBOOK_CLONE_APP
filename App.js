import React, { useContext, useEffect } from "react";

import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";

import { APP_PAGES } from "./context/settings";
import { AppProvider, AppContext } from "./context/AppProvider";
import LoginScreen from "./components/screens/LoginScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
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
        {navPage === APP_PAGES.PROFILE && <ProfileScreen />}
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