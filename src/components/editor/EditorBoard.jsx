import { useEffect, useRef, useContext } from "react";
import MediumEditor from "medium-editor";
import EditorContext from "../../context/editor/EditorContext";

function EditorBoard() {
  const editorRef = useRef(null);

  const { openedFileData, updateEditorData } = useContext(EditorContext);
  const fakeData = JSON.parse(localStorage.getItem("fakeData"));

  useEffect(() => {
    const editor = new MediumEditor(editorRef.current, {
      toolbar: {
        buttons: ["bold", "italic", "underline", "anchor", "h2", "h3", "quote"],
      },
      keyboardCommands: {
        commands: [
          {
            command: "bold",
            key: "B",
            meta: true,
            shift: false,
            alt: false,
          },
          {
            command: "italic",
            key: "I",
            meta: true,
            shift: false,
            alt: false,
          },
          {
            command: "underline",
            key: "U",
            meta: true,
            shift: false,
            alt: false,
          },
        ],
      },
      placeholder: "Start writing your content here...",
    });

    // Set initial content (fake data)
    const initialContent = openedFileData.editorData
      ? openedFileData.editorData
      : "<p>Start writing your content here...</p>";
    editor.setContent(initialContent);

    // Handle content changes
    editor.subscribe("editableInput", (eventData) => {
      const updatedContent = editor.getContent();
      console.log("Editor content changed:", updatedContent);
      // Store the updated content in your state or handle it as needed
      updateEditorData(fakeData, openedFileData.id, updatedContent);
    });

    return () => editor.destroy();
  }, [openedFileData.editorData]);

  return (
    <div
      style={{ padding: "5px", height: "100%", outline: "none" }}
      ref={editorRef}
      className="editor-container"
    ></div>
  );
}

export default EditorBoard;
