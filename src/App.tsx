import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.content}>
        <InputTask />
      </div>
    </div>
  );
}

export default App;
