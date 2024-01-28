/* eslint-disable react/prop-types */
import EditorContext from "./EditorContext";
import { useState } from "react";

const EditorProvider = ({ children }) => {
  const [openedFileData, setOpenedFileData] = useState(null);

  const fetchEditorDataHandler = (node) => {
    setOpenedFileData(node);
  };

  const updateEditorData = (nodes, idToUpdate, newEditorData) => {
    console.log(idToUpdate);
    for (const item of nodes) {
      console.log(item.id, idToUpdate);
      if (item.id == idToUpdate) {
        item.editorData = newEditorData;
        localStorage.setItem("fakeData", JSON.stringify(nodes));
      }

      if (item.childNode && item.childNode.length > 0) {
        updateEditorData(item.childNode, idToUpdate, newEditorData);
      }
    }
  };

  return (
    <EditorContext.Provider
      value={{ fetchEditorDataHandler, openedFileData, updateEditorData }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
