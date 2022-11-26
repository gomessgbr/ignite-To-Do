import { PlusCircle } from "phosphor-react";
import { FormEvent } from "react";
import styles from "./InputTask.module.css";

interface InputTaskProps {
  createNewTask: (event: FormEvent) => void;
}

export function InputTask({ createNewTask }: InputTaskProps) {
  function handleNewTask(event: FormEvent) {
    createNewTask(event);
  }
  return (
    <div className={styles.containerInputTask}>
      <header className={styles.inputTaskContainer}>
        <form onSubmit={handleNewTask}>
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
