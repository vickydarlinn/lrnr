import NavigationContext from "../../../context/NavigationContext";
import { HiDotsVertical } from "react-icons/hi";
import { useContext } from "react";
import styles from "./sidebarNavigation.module.css";

const SidebarNavigation = () => {
  const { selectedMenu, handleSelectMenu } = useContext(NavigationContext);
  const handleItemClick = (menu) => {
    handleSelectMenu(menu);
  };

  return (
    <div className={styles.wrapper}>
      <span
        className={`${styles.nav_link} ${
          selectedMenu === "All" && styles.active
        }`}
        onClick={() => handleItemClick("All")}
      >
        All
      </span>
      <span
        className={`${styles.nav_link} ${
          selectedMenu === "Board" && styles.active
        } `}
        onClick={() => handleItemClick("Board")}
      >
        Board
      </span>
      <span
        className={`${styles.nav_link} ${
          selectedMenu === "Graph" && styles.active
        } `}
        onClick={() => handleItemClick("Graph")}
      >
        Graph
      </span>
      <span
        className={`${styles.nav_link} ${
          selectedMenu === "Recent" && styles.active
        }`}
        onClick={() => handleItemClick("Recent")}
      >
        Recent
      </span>
      <span>
        <HiDotsVertical />
      </span>
    </div>
  );
};

export default SidebarNavigation;
