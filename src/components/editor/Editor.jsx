/* eslint-disable react/prop-types */
import { memo, useEffect, useRef, useContext, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./tools";
import EditorContext from "../../context/editor/EditorContext";

const Editor = ({ editorblock }) => {
  const { openedFileData, fetchEditorDataHandler } = useContext(EditorContext);
  // const [updatedData, setUpdatedData] = useState(openedFileData);
  const ref = useRef();
  //Initialize editorjs
  useEffect(() => {
    console.log("calling");
    //Initialize editorjs if we don't have a reference
    console.log(ref.current);
    // if (!ref.current) {
    const editor = new EditorJS({
      holder: editorblock,
      tools: EDITOR_JS_TOOLS,
      data: openedFileData,
      async onChange(api, event) {
        const data = await api.saver.save();
        console.log(data);
        // setUpdatedData(data);
      },
    });
    ref.current = editor;
    // }

    //Add a return function to handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, [openedFileData]);
  return <div style={{ border: "1px solid red" }} id={editorblock} />;
};

export default memo(Editor);
