import SideBar from "./components/sideBar";
import Header from "./components/header/Header";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";
import EditorBoard from "./components/editor/EditorBoard";
import { useEffect } from "react";
import { fakeData } from "./utils/fakeData";

const App = () => {
  useEffect(() => {
    console.log("hello");

    if (!localStorage.getItem("fakeData"))
      localStorage.setItem("fakeData", JSON.stringify(fakeData));
  }, []);
  return (
    <main>
      <Header />
      <SideBar />
      <div
        className="editor"
        style={{
          border: "1px solid blue",
          marginLeft: "300px",
        }}
      >
        <EditorBoard />
      </div>
    </main>
  );
};

export default App;
