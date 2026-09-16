import { useRef, useState } from 'react';
import TextInputWithLabel from '../../../shared/TextInputWithLabel';
import { isValidTodoTitle } from '../../../utils/todoValidation';

function TodoListItem({ todo, onCompleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(todo.title);
  const inputRef = useRef();

  const handleCancel = () => {
    setWorkingTitle(todo.title);
    setIsEditing(false);
  };

  const handleEdit = (event) => {
    setWorkingTitle(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    if (!isEditing || !isValidTodoTitle(workingTitle)) {
      return;
    }

    onUpdateTodo({
      ...todo,
      title: workingTitle,
    });

    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      <form className="todo-item-form" onSubmit={handleUpdate}>
        {isEditing ? (
          <>
            <div className="todo-edit-input">
              <TextInputWithLabel
                elementId={`todoTitle${todo.id}`}
                labelText="Todo"
                ref={inputRef}
                value={workingTitle}
                onChange={handleEdit}
                maxLength={100}
              />
            </div>

            <button type="button" onClick={handleCancel}>
              Cancel
            </button>

            <button
              type="submit"
              disabled={!isValidTodoTitle(workingTitle)}
            >
              Update
            </button>
          </>
        ) : (
          <>
            <label>
              <input
                type="checkbox"
                id={`checkbox${todo.id}`}
                checked={todo.isCompleted}
                onChange={() => onCompleteTodo(todo.id)}
              />
            </label>

            <button
              type="button"
              className="todo-title-button"
              onClick={() => setIsEditing(true)}
              aria-label={`Edit todo: ${todo.title}`}
            >
              {todo.title}
            </button>
          </>
        )}
      </form>
    </li>
  );
}

export default TodoListItem;


