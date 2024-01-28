/* eslint-disable react/prop-types */
import NavigationContext from "./NavigationContext";
import { useState } from "react";

const BooksProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const [isShowingMenu, setIsShowingMenu] = useState(true);

  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu);
  };
  const handleShowMenu = () => {
    setIsShowingMenu(!isShowingMenu);
  };
  return (
    <NavigationContext.Provider
      value={{ selectedMenu, handleSelectMenu, handleShowMenu, isShowingMenu }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default BooksProvider;
