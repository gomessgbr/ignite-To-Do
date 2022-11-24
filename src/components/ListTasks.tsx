import { InputTask } from "./InputTask";
import styles from "./ListTasks.module.css";
import { TaskItem } from "./TaskItem";

export function ListTasks() {
  return (
    <div className={styles.containerListTask}>
      <InputTask />

      <div className={styles.headerTasks}>
        <div className={styles.createTask}>
          Tarefas Criadas<span> 5</span>
        </div>
        <div className={styles.doneTask}>
          Concluídas<span> 2 de 5</span>
        </div>
      </div>

      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
}
