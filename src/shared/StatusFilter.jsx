import { NavLink } from 'react-router';

function StatusFilter() {
  return (
    <nav className="status-filter" aria-label="Todo status">
      <span>Show: </span>

      <NavLink to="/todos">All Todos</NavLink>

      <NavLink to="/todos?status=active">
        Active Todos
      </NavLink>

      <NavLink to="/todos?status=completed">
        Completed Todos
      </NavLink>
    </nav>
  );
}

export default StatusFilter;

