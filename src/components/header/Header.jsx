import styles from "./header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiUserAdd } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import UserProfile from "./userProfile";
import SidebarNavigation from "./sidebarNavigation";
import NavigationContext from "../../context/NavigationContext";
import { useContext } from "react";

const Header = () => {
  const { handleShowMenu, isShowingMenu } = useContext(NavigationContext);
  return (
    <>
      <header className={styles.wrapper}>
        <span className={styles.icon} onClick={handleShowMenu}>
          <GiHamburgerMenu />
        </span>
        <div className={`${styles.flex} ${styles.gap} `}>
          <div className={styles.flex}>
            <span className={styles.icon}>
              <HiUserAdd />
            </span>
            <span>INVITE TEAM MEMBER</span>
          </div>
          <span className={styles.icon}>
            <IoIosNotificationsOutline />
          </span>
          <UserProfile />
        </div>
      </header>
      {isShowingMenu && <SidebarNavigation />}
    </>
  );
};

export default Header;
