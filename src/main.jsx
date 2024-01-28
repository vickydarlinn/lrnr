import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NavigationProvider from "./context/NavigationProvider.jsx";
import EditorProvider from "./context/editor/EditorProvider.jsx";
import NodesDataProvider from "./context/nodesData/NodesDataProvider.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavigationProvider>
      <EditorProvider>
        <NodesDataProvider>
          <App />
        </NodesDataProvider>
      </EditorProvider>
    </NavigationProvider>
  </React.StrictMode>
);
