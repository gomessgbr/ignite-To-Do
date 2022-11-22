import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <InputTask />
      <div></div>
    </div>
  );
}

export default App;
