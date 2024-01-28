import NavigationContext from "../../../context/NavigationContext";
import { HiDotsVertical } from "react-icons/hi";
import { useContext } from "react";

const SidebarNavigation = () => {
  const { selectedMenu, handleSelectMenu } = useContext(NavigationContext);
  const handleItemClick = (menu) => {
    handleSelectMenu(menu);
  };

  return (
    <div className="flex gap-4 items-center p-2">
      <span
        className={`cursor-pointer ${selectedMenu === "All" && "font-bold"}`}
        onClick={() => handleItemClick("All")}
      >
        All
      </span>
      <span
        className={`cursor-pointer ${selectedMenu === "Board" && "font-bold"} `}
        onClick={() => handleItemClick("Board")}
      >
        Board
      </span>
      <span
        className={`cursor-pointer ${selectedMenu === "Graph" && "font-bold"} `}
        onClick={() => handleItemClick("Graph")}
      >
        Graph
      </span>
      <span
        className={`cursor-pointer ${selectedMenu === "Recent" && "font-bold"}`}
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
