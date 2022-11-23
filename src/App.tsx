import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { ListTasks } from "./components/ListTasks";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <ListTasks />
      <div className={styles.content}></div>
    </div>
  );
}

export default App;
