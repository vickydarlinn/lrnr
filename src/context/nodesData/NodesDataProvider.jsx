/* eslint-disable react/prop-types */
import NodesDataContext from "./NodesDataContext";
import { useEffect, useState } from "react";

const BooksProvider = ({ children }) => {
  const [fakeData, setFakeData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fakeData"));
    setFakeData(data);
  }, []);

  return (
    <NodesDataContext.Provider value={{ fakeData, setFakeData }}>
      {children}
    </NodesDataContext.Provider>
  );
};

export default BooksProvider;
