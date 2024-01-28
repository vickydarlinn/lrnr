/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./modal.module.css";
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
        <div className={styles.wrapper}>
          <div className={styles.modal}>
            <h2 className={styles.heading}>
              Create {type === "file" ? "File" : "Folder"}
            </h2>
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
            <div className={styles.btns}>
              <button className={styles.btn} onClick={handleSubmit}>
                Submit
              </button>
              <button className={styles.btn} onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
