import { NavLink } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import styles from './Navigation.module.css';

function Navigation() {
  const { isAuthenticated } = useAuth();

  return (
    <nav>
      <ul className={styles.navigationList}>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${styles.navigationLink} ${isActive ? styles.active : ''}`
            }
          >
            About
          </NavLink>
        </li>

        {isAuthenticated ? (
          <>
            <li>
              <NavLink
                to="/todos"
                className={({ isActive }) =>
                  `${styles.navigationLink} ${isActive ? styles.active : ''}`
                }
              >
                Todos
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `${styles.navigationLink} ${isActive ? styles.active : ''}`
                }
              >
                Profile
              </NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${styles.navigationLink} ${isActive ? styles.active : ''}`
              }
            >
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;

