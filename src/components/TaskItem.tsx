import { Trash } from "phosphor-react";

import styles from "./TaskItem.module.css";

interface TaskItemProps {
  done: string;
  onDelete: () => void;
  onCreate: () => void;
}

export function TaskItem({ done, onDelete }: TaskItemProps) {
  return (
    <div className={styles.containerTaskItem}>
      <button className={styles.radioButton} />
      <div className={styles.contentTask}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quae
        hic tempore placeat, atque beatae.
      </div>
      <button className={styles.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  );
}
