"use client"; // This ensures it's a client component
import React, { createContext, useContext, useEffect, useState } from 'react';

export const MenuColorContext = createContext();

export const MenuColorProvider = ({ children }) => {
  const [menuIsDark, setMenuIsDark] = useState(true); // Default color
  useEffect(() => {
    console.log(menuIsDark)
  }, [menuIsDark])


  return (
    <MenuColorContext.Provider value={{ menuIsDark, setMenuIsDark }}>
      {children}
    </MenuColorContext.Provider>
  );
};

export const useMenuColor = () => {
  return useContext(MenuColorContext);
};



// const menuColorContext = createContext()