import React, { useState } from "react";
import { APP_PAGES } from "./settings";
import axios from "axios";

export const AppContext = React.createContext({
  navPage: APP_PAGES.LOGIN,
  setNavPage: (val) => {},
  firstName: "",
  setFirstName: (val) => {},
  lastName: "",
  setLastName: (val) => {},
  email: "",
  setEmail: (val) => {},
  phoneNumber: "",
  setPhoneNumber: (val) => {},
  age: "",
  setAge: (val) => {},
  profilePicture: null,
  setProfilePicture: (val) => {},
  coverPicture: null,
  setCoverPicture: (val) => {},
  gender: "",
  setGender: (val) => {},
  work: "",
  setWork: (val) => {},
  education: "",
  setEducation: (val) => {}
});

export const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = useState(APP_PAGES.LOGIN);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [work, setWork] = useState("");
  const [education, setEducation] = useState("");

  return (
    <AppContext.Provider
      value={{
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
        gender,
        setGender,
        age,
        setAge,
        work,
        setWork,
        education,
        setEducation
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
