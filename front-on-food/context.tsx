import React, { ContextType, ReactNode, useContext, useState } from "react";

const AppContext = React.createContext({});

export const AppProvider = ({ children }: any) => {
  const [favList, setFavList] = useState([]);

  return (
    <AppContext.Provider value={{ favList, setFavList }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
