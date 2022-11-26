import { Trash } from "phosphor-react";

import styles from "./TaskItem.module.css";

interface TaskItemProps {
  taskId: string;
  content: string;
  isDone: boolean;
  onSelected: () => void;
  onDelete: () => void;
}

export function TaskItem({
  taskId,
  content,
  isDone,
  onSelected,
  onDelete,
}: TaskItemProps) {
  return (
    <div className={styles.containerTaskItem}>
      <button className={styles.radioButton} />
      <div className={styles.contentTask}>{content}</div>
      <button className={styles.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  );
}
