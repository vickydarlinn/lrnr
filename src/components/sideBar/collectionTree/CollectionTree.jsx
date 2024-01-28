/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import styles from "./CollectionTree.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiPlus } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Modal from "../../modal";
import EditorContext from "../../../context/editor/EditorContext";

const CollectionTree = ({ data }) => {
  const [expandedCollections, setExpandedCollections] = useState([]);
  const [fakeData, setFakeData] = useState(data);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchEditorDataHandler } = useContext(EditorContext);

  const toggleExpand = (id) => {
    setExpandedCollections((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const openModal = (id) => {
    setSelectedNode(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (data, selectedNodeId, nodes) => {
    return nodes.map((item) => {
      if (item.id === selectedNodeId && item.isCollection) {
        const newChildNode = {
          name: data.name,
          id: data.id,
          isCollection: data.isCollection,
          childNode: data.isCollection ? [] : undefined,
        };
        return {
          ...item,
          childNode: [...(item.childNode || []), newChildNode],
        };
      }
      return item;
    });
  };

  useEffect(() => {
    setFakeData(data);
  }, [data]);

  const handleModalSubmitAndUpdate = (data) => {
    setFakeData((prevData) => handleModalSubmit(data, selectedNode, prevData));
    localStorage.setItem("fakeData", JSON.stringify(fakeData));
  };

  return (
    <>
      {/* {console.log(expandedCollections)} */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleModalSubmitAndUpdate}
      />

      <div className={styles.wrapper}>
        {fakeData?.map((item) => {
          const isCollectionExpanded = expandedCollections.includes(item.id);

          if (item.isCollection) {
            return (
              <div key={item.id} className={styles.container_node}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className={isCollectionExpanded ? styles.bold : null}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {isCollectionExpanded ? (
                      <MdKeyboardArrowDown />
                    ) : (
                      <MdKeyboardArrowRight />
                    )}{" "}
                    {item?.name}
                  </div>
                  {isCollectionExpanded && (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span style={{ cursor: "pointer" }}>
                        <HiPlus onClick={() => openModal(item.id)} />
                      </span>
                      <span style={{ cursor: "pointer" }}>
                        <BsThreeDotsVertical />
                      </span>
                    </div>
                  )}
                </div>
                <div style={{ marginLeft: "20px" }}>
                  {isCollectionExpanded && (
                    <CollectionTree data={item?.childNode} />
                  )}
                </div>
              </div>
            );
          } else {
            return (
              <div
                style={{
                  padding: "5px 0px 5px 5px",
                  cursor: "pointer",
                }}
                key={item.id}
                onClick={() => fetchEditorDataHandler(item.editorData)}
              >
                📄 {item?.name}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default CollectionTree;