import { PlusCircle } from "phosphor-react";
import styles from "./InputTask.module.css";

export function InputTask() {
  return (
    <div className={styles.containerInputTask}>
      <header className={styles.inputTaskContainer}>
        <form>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            className={styles.inputTask}
          />
          <button type="submit" className={styles.inputButton}>
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
      </header>
    </div>
  );
}
