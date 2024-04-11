import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [parentProps, setParentProps] = useState({
    name: "John",
    age: 30,
    city: "New York"
  });

  return (
    <AppContext.Provider value={{ parentProps, setParentProps }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
