import { Trash } from "phosphor-react";
import { InputTask } from "./InputTask";
import styles from "./ListTasks.module.css";

export function ListTasks() {
  return (
    <div className={styles.container}>
      <InputTask />

      <div className={styles.headerTasks}>
        <p style={{ color: "var(--blue)" }}>Tarefas Criadas</p>
        <p style={{ color: "var(--purple)" }}>Concluídas</p>
      </div>
      <div>{/* <Trash size={24} /> */}</div>
    </div>
  );
}
