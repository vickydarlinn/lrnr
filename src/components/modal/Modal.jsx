/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("file");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = () => {
    // You can perform additional validation here if needed
    if (!name) {
      alert("Please enter a name");
    }
    onSubmit({
      name,
      type,
      id: uuid(),
      isCollection: type === "folder" ? true : false,
    });
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1000",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2>Create {type === "file" ? "File" : "Folder"}</h2>
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
              Type:
              <select value={type} onChange={handleTypeChange}>
                <option value="file">File</option>
                <option value="folder">Folder</option>
              </select>
            </label>
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
