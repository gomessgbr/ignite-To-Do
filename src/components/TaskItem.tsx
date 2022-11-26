import { Trash } from "phosphor-react";

import styles from "./TaskItem.module.css";

interface TaskItemProps {
  taskId: string;
  content: string;
  isDone: boolean;
  onSelected: () => void;
  onDelete: (taskId: string) => void;
}

export function TaskItem({
  taskId,
  content,
  isDone,
  onSelected,
  onDelete,
}: TaskItemProps) {
  function handleDelete() {
    onDelete(taskId);
  }

  function handleSelected() {
    onSelected(taskId);
  }

  return (
    <div className={styles.containerTaskItem}>
      <button className={styles.radioButton} onClick={handleSelected} />
      <div className={styles.contentTask}>{content}</div>
      <button className={styles.deleteButton} onClick={handleDelete}>
        <Trash size={20} />
      </button>
    </div>
  );
}
