import { useState } from "react";
import styles from "./userProfile.module.css";

const UserProfile = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={styles.wrapper}
      onClick={() => setShowMenu((prev) => !prev)}
    >
      <span>US</span>
      <span className={styles.online}></span>
      <span className={styles.new}>NEW</span>

      {showMenu && (
        <ul className={styles.menu}>
          <li>Dark Mode</li>
          <li>Profile</li>
          <hr />
          <li className={styles.active}>What&apos;s new</li>
          <li>Help</li>
          <li>Send feedback</li>
          <li>Hints and shortcuts</li>
          <hr />
          <li>Log out</li>
        </ul>
      )}
    </div>
  );
};

export default UserProfile;
