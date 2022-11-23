import { Trash } from "phosphor-react";
import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <div className={styles.container}>
      <div>
        <p>Tarefas Criadas</p>
        <p>Concluídas</p>
      </div>
      <div>
        <Trash size={24} />
      </div>
    </div>
  );
}
