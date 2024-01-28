import styles from "./sideBar.module.css";
import { useState, useContext, useEffect } from "react";
import CollectionTree from "./collectionTree";
// import { fakeData as data } from "../../utils/fakeData";
import { HiPlus } from "react-icons/hi";
import Modal from "../modal";
import NavigationContext from "../../context/NavigationContext";

const SideBar = () => {
  const data = JSON.parse(localStorage.getItem("fakeData"));
  const [fakeData, setFakeData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedMenu, isShowingMenu } = useContext(NavigationContext);

  useEffect(() => {
    if (fakeData !== null)
      localStorage.setItem("fakeData", JSON.stringify(fakeData));
  }, [fakeData]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleModalSubmitAndUpdate = (data) => {
    const newNode = {
      name: data.name,
      id: data.id,
      isCollection: data.isCollection,
      childNode: data.isCollection ? [] : undefined,
    };
    if (!data.isCollection) {
      newNode.editorData = `<p>Lets learn something new...</p>`;
    }
    setFakeData((prev) => [...prev, newNode]);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleModalSubmitAndUpdate}
      />
      {isShowingMenu && (
        <div className={styles.wrapper}>
          {selectedMenu == "All" ? (
            <div className={styles.tree_node}>
              <div className={styles.root_node}>
                <span>DFIN</span>
                <span>
                  <HiPlus onClick={openModal} />
                </span>
              </div>
              <CollectionTree fakeData={fakeData} setFakeData={setFakeData} />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              {" "}
              {selectedMenu} menu will Come soon
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SideBar;
