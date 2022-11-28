import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./ListTasks.module.css";
import { TaskItem } from "./TaskItem";

const tasksMock: TaskInterface[] = [
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

interface TaskInterface {
  id: string;
  content: string;
  isDone: boolean;
}
export function ListTasks() {
  const [tasks, setTasks] = useState<TaskInterface[]>(tasksMock);
  const [newTaskContent, setNewTaskContent] = useState("");
  const [doneTasks, setDoneTasks] = useState("0");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const NewTask = {
      id: uuidv4(),
      content: newTaskContent,
      isDone: false,
    };
    setTasks([...tasks, NewTask]);
    setNewTaskContent("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskContent(event.target.value);
  }
  function handleDelete(idTask: string) {
    const taskWithOutDeletedOne = tasks.filter((task) => {
      return task.id !== idTask;
    });

    setTasks(taskWithOutDeletedOne);
  }

  function handleSelected(idTask: string) {
    const newTasks = tasks.map((task: TaskInterface) => {
      if (idTask === task.id) {
        task.isDone = !task.isDone;
      }
      return task;
    });
    setTasks(newTasks);
    doneTasksFunc();
  }

  function doneTasksFunc() {
    const done = tasks.filter((task) => {
      if (task.isDone) {
        return task;
      }
    });

    setDoneTasks(`${done.length} de ${tasks.length}`);
  }
  useEffect(() => {
    doneTasksFunc();
  }, []);
  return (
    <div className={styles.containerListTask}>
      <div className={styles.containerInputNewTask}>
        <header className={styles.inputNewTaskContainer}>
          <form onSubmit={handleCreateNewTask}>
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              className={styles.inputTask}
              value={newTaskContent}
              onChange={handleNewTaskChange}
            />
            <button type="submit" className={styles.inputNewTaskButton}>
              Criar
              <PlusCircle size={20} />
            </button>
          </form>
        </header>
      </div>

      <div className={styles.headerTasks}>
        <div className={styles.createTask}>
          Tarefas Criadas<span> {tasks.length}</span>
        </div>
        <div className={styles.doneTask}>
          Concluídas<span> {doneTasks}</span>
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
