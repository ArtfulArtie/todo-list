import TodoListItem from './TodoListItem';
import { useMemo } from 'react';

function TodoList({ todoList, onCompleteTodo, onUpdateTodo, dataVersion }) {
  const filteredTodoList = useMemo(() => {
  
    return {
      version: dataVersion,
      todos: todoList.filter((todo) => !todo.isCompleted),
    };
  }, [todoList, dataVersion]);

  return (
    <ul>
      {filteredTodoList.todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onCompleteTodo={onCompleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;