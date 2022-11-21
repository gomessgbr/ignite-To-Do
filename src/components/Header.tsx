import styles from "./Header.module.css";

import rocket from "../assets/rocket.svg";
import todoLogo from "../assets/todoLogo.svg";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={rocket} alt="Logo foguete" />
        <img src={todoLogo} alt="Logo todo" />
      </div>
    </header>
  );
}
