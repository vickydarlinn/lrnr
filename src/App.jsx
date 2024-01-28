import SideBar from "./components/sideBar";
import Header from "./components/header/Header";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";
import EditorBoard from "./components/editor/EditorBoard";
import { useEffect, useContext } from "react";
import { fakeData } from "./utils/fakeData";
import EditorContext from "./context/editor/EditorContext";
import NavigationContext from "./context/NavigationContext";

const App = () => {
  const { openedFileData } = useContext(EditorContext);
  const { isShowingMenu } = useContext(NavigationContext);
  useEffect(() => {
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
          marginLeft: isShowingMenu ? "300px" : "0px",
          height: "calc(100vh - 125px)",
        }}
      >
        {openedFileData ? (
          <EditorBoard />
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              fontSize: "24px",
            }}
          >
            Open a file to see the content
          </div>
        )}
      </div>
    </main>
  );
};

export default App;
