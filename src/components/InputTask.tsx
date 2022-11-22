import styles from "./InputTask.module.css";

export function InputTask() {
  return (
    <div className={styles.container}>
      <form>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className={styles.Input}
        />
        <button type="submit">Criar +</button>
      </form>
    </div>
  );
}
