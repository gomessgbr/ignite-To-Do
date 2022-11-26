import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { InputTask } from "./InputTask";
import styles from "./ListTasks.module.css";
import { TaskItem } from "./TaskItem";

const tasks = [
  {
    id: uuidv4(),
    content: "Lavar a louça",
    isDone: true,
  },
  {
    id: uuidv4(),
    content: "Limpar a sala",
    isDone: false,
  },
  {
    id: uuidv4(),
    content: "Limpar o banheiro",
    isDone: false,
  },
  {
    id: uuidv4(),
    content: "Varrer o quarto",
    isDone: true,
  },
];

export function ListTasks() {
  function handleDelete() {}
  function handleSelected() {}
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
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          taskId={task.id}
          content={task.content}
          isDone={task.isDone}
          onDelete={handleDelete}
          onSelected={handleSelected}
        />
      ))}
    </div>
  );
}
