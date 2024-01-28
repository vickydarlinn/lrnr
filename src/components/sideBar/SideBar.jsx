import styles from "./sideBar.module.css";
import { useState, useContext } from "react";
import CollectionTree from "./collectionTree";
import { fakeData as data } from "../../utils/fakeData";
import { HiPlus } from "react-icons/hi";
import Modal from "../modal";
import NavigationContext from "../../context/NavigationContext";

const SideBar = () => {
  const [fakeData, setFakeData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedMenu, isShowingMenu } = useContext(NavigationContext);
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
    setFakeData((prev) => [...prev, newNode]);
  };
  console.log(selectedMenu);

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
              <CollectionTree data={fakeData} />
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
