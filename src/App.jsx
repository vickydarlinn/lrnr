import SideBar from "./components/sideBar";
import Header from "./components/header/Header";
import Editor from "./components/editor/Editor";

const App = () => {
  return (
    <main>
      <Header />
      <SideBar />
      <div
        className="editor"
        style={{
          border: "2px solid blue",
          marginLeft: "300px",
          paddingLeft: `55px`,
        }}
      >
        <Editor editorblock="editorjs-container" />
      </div>
    </main>
  );
};

export default App;
