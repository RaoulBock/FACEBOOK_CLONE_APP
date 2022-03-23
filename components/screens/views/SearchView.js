import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";
import React, { useContext } from "react";

import { AppContext, AppProvider } from "../../../context/AppProvider";
import { APP_PAGES, APP_ICONS, APP_STYLE } from "../../../context/settings";

import ProfileHeader from "../../headers/ProfileHeader";
const HEADER_HEIGHT =
  Platform.OS === "ios" ? 115 : 70 + StatusBar.currentHeight;

const SearchView = () => {
  const { navPage, setNavPage } = useContext(AppContext);
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
        <ProfileHeader onPress={() => setNavPage(APP_PAGES.HOME)} />
        <View style={{ borderWidth: 1, borderColor: "#eee", marginTop: 10 }} />
      </View>

      <ScrollView style={{ marginTop: HEADER_HEIGHT }}>
        <View
          style={{
            marginLeft: 20,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginRight: 20
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 20 }}>
            Recent Searchs
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#40739e", fontWeight: "800" }}>See all</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchView;

const styles = StyleSheet.create(APP_STYLE);
