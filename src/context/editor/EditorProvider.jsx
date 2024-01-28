/* eslint-disable react/prop-types */
import EditorContext from "./EditorContext";
import { useState } from "react";

const EditorProvider = ({ children }) => {
  const [openedFileData, setOpenedFileData] = useState(null);

  const fetchEditorDataHandler = (data) => {
    setOpenedFileData(data);
  };
  return (
    <EditorContext.Provider value={{ fetchEditorDataHandler, openedFileData }}>
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
