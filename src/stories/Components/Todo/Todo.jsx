import { React, useState } from "react";

import {
  TodoSection,
  TodoTaskInput,
  TodoMainSectionUl,
  NewTodoTask,
  TodoListParagraph,
  TodoInputCheckbox,
  TodoDestroyButton,
} from "./styles";

import { generateUniqueID } from "./functions/generateId";

const Todo = () => {
  const [enteredTask, setEnteredTask] = useState([]);

  const removeClickHandler = (id, enteredTask, setEnteredTask) => {
    const newArray = enteredTask.filter((el) => el.id !== id);

    setEnteredTask(newArray);
  };

  const handleCheckBoxChange = (id, enteredTask, setEnteredTask) => {
    const index = enteredTask.findIndex((task) => task.id === id);

    const list = [...enteredTask];
    list[index].checked = !list[index].checked;
    setEnteredTask(list);
  };

  const handleTaskInput = (event, enteredTask, setEnteredTask) => {
    if (event.key === "Enter" && event.target.value.length > 0) {
      setEnteredTask([
        {
          id: generateUniqueID(enteredTask),
          value: event.target.value,
          checked: false,
        },
        ...enteredTask,
      ]);
      event.target.value = "";
    }
  };

  return (
    <TodoSection>
      <TodoTaskInput
        data-testid="todo-textfield"
        aria-label="Todo Input Field"
        placeholder="What needs to be done?"
        onKeyDown={(event) =>
          handleTaskInput(event, enteredTask, setEnteredTask)
        }
        autoFocus
      />
      <TodoMainSectionUl data-testid="todo-list-item-container">
        {enteredTask.map((task) => {
          return (
            <NewTodoTask
              onChange={() =>
                handleCheckBoxChange(task.id, enteredTask, setEnteredTask)
              }
              key={task.id}
              data-testid="todo-list-item"
            >
              <TodoInputCheckbox
                type="checkbox"
                aria-label="Done checkbox"
                aria-describedby={task.id}
                data-testid="todo-complete-task"
              />
              <TodoListParagraph
                id={task.id}
                checked={task.checked}
                data-testid={task.id}
              >
                {task.value}
              </TodoListParagraph>
              <TodoDestroyButton
                aria-label="Remove Task"
                onClick={() =>
                  removeClickHandler(task.id, enteredTask, setEnteredTask)
                }
                aria-describedby={task.id}
                data-testid="todo-remove-task"
              ></TodoDestroyButton>
            </NewTodoTask>
          );
        })}
      </TodoMainSectionUl>
    </TodoSection>
  );
};

export default Todo;
