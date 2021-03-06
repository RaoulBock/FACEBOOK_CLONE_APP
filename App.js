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
import UserContactInformation from "./components/screens/registration/UserContactInformation";
import UserGeneralInformation from "./components/screens/registration/UserGeneralInformation";
import UserRegisterProfilePicture from "./components/screens/registration/UserRegisterProfilePicture";
import PublicDetails from "./components/screens/profile/PublicDetails";
import BioDescriptionView from "./components/screens/profile/publicDetails/BioDescriptionView";
import DetailsDescription from "./components/screens/profile/publicDetails/DetailsDescription";
import AddWork from "./components/screens/profile/publicDetails/AddWork";
import EducationHighSchoolInformation from "./components/screens/profile/publicDetails/EducationHighSchoolInformation";
import EducationCollegeInformation from "./components/screens/profile/publicDetails/EducationCollegeInformation";
import NewStatusView from "./components/screens/home/NewStatusView";
import SearchView from "./components/screens/views/SearchView";

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
        {navPage === APP_PAGES.USER_REGISTER_CONTACT && (
          <UserContactInformation />
        )}
        {navPage === APP_PAGES.USER_REGISTER_GENERAL && (
          <UserGeneralInformation />
        )}
        {navPage === APP_PAGES.USER_REGISTER_PROFILEPICTURE && (
          <UserRegisterProfilePicture />
        )}
        {navPage === APP_PAGES.USER_PROFILE_PUBLIC_DETAILS && <PublicDetails />}
        {navPage === APP_PAGES.PUBLIC_DETAILS.BIO && <BioDescriptionView />}
        {navPage === APP_PAGES.PUBLIC_DETAILS.DETAILS && <DetailsDescription />}
        {navPage === APP_PAGES.EDIT_DERAILS.WORK && <AddWork />}
        {navPage === APP_PAGES.EDUCATION.HIGH_SCHOOL && (
          <EducationHighSchoolInformation />
        )}
        {navPage === APP_PAGES.EDUCATION.COLLEGE && (
          <EducationCollegeInformation />
        )}
        {navPage === APP_PAGES.NEW_STATUS && <NewStatusView />}
        {navPage === APP_PAGES.SEARCH && <SearchView />}
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
