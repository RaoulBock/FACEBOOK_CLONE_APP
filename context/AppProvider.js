import React, { useState } from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: APP_PAGES.LOGIN,
  setNavPage: (val) => {}
});

export const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = useState(APP_PAGES.LOGIN);
  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
