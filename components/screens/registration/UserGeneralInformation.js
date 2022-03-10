import { StyleSheet, Text, View, TouchableOpacity, Picker } from "react-native";
import React, { useContext, useState } from "react";

import Input from "../../generic/Input";
import Button from "../../generic/Button";

import { APP_ICONS, APP_STYLE, APP_PAGES } from "../../../context/settings";
import { AppContext, AppProvider } from "../../../context/AppProvider";

const UserGeneralInformation = () => {
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
    age,
    setAge,
    gender,
    setGender
  } = useContext(AppContext);
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          marginBottom: 30,
          flexDirection: "row",
          marginLeft: 20,
          justifyContent: "space-between"
        }}
      >
        <Text style={styles.LoginHeader}>Hi. {firstName} </Text>
        <Text></Text>
      </View>
      <View>
        <View style={styles.formControl}>
          <Input
            placeholder="Age"
            keyboardType="numeric"
            onChangeText={(age) => setAge(age)}
            value={age}
          />
        </View>
        <View style={styles.formControl}>
          <View style={styles.genderPicker}>
            <Picker
              selectedValue={selectedValue}
              style={{
                height: 40,
                width: "100%",
                color: "gray"
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item
                label="Male"
                value={gender}
                onChangeText={(gender) => setGender(gender)}
              />
              <Picker.Item
                label="Female"
                value={gender}
                onChangeText={(gender) => setGender(gender)}
              />
            </Picker>
          </View>
        </View>
      </View>
      <Button
        title="Continue"
        onPress={() => setNavPage(APP_PAGES.USER_REGISTER_PROFILEPICTURE)}
      />
    </View>
  );
};

export default UserGeneralInformation;

const styles = StyleSheet.create(APP_STYLE);
