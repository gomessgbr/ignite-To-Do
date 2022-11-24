import { InputTask } from "./InputTask";
import styles from "./ListTasks.module.css";

export function ListTasks() {
  return (
    <div className={styles.container}>
      <InputTask />

      <div className={styles.headerTasks}>
        <p style={{ color: "var(--blue)" }}>
          Tarefas Criadas<span>5</span>
        </p>
        <p style={{ color: "var(--purple)" }}>
          Concluídas<span>2 de 5</span>
        </p>
      </div>
      <div></div>
    </div>
  );
}
