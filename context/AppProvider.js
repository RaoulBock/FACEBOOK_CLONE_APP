import React, { useState } from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: APP_PAGES.LOGIN,
  setNavPage: (val) => {},
  firstName: "",
  setFirstName: (val) => {},
  lastName: "",
  setLastName: (val) => {},
  email: "",
  setEmail: (val) => {}
});

export const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = useState(APP_PAGES.LOGIN);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

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
        setEmail
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
