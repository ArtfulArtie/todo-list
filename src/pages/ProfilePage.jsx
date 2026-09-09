import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

function ProfilePage() {
  const { user, token } = useAuth();

  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    active: 0,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchTodoStats() {
      if (!token) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError('');

      try {
        const response = await fetch('/api/tasks?limit=100', {
          headers: {
            'X-CSRF-TOKEN': token,
          },
          credentials: 'include',
        });

        if (response.status === 401) {
          throw new Error('You are not authorized to view this profile.');
        }

        if (!response.ok) {
          throw new Error('Failed to load profile statistics.');
        }

        const data = await response.json();
        const todos = data.tasks || [];

        const completed = todos.filter(
          (todo) => todo.isCompleted
        ).length;

        setStats({
          total: todos.length,
          completed,
          active: todos.length - completed,
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTodoStats();
  }, [token]);

  const completionPercentage =
    stats.total > 0
      ? Math.round((stats.completed / stats.total) * 100)
      : 0;

  return (
    <main>
      <h1>Profile</h1>

      <section>
        <h2>User Information</h2>

        <p>
          <strong>Name:</strong>{' '}
          {user?.name || 'User'}
        </p>
      </section>

      <section>
        <h2>Todo Statistics</h2>

        {isLoading && <p>Loading statistics...</p>}

        {error && <p>{error}</p>}

        {!isLoading && !error && (
          <div>
            <p>
              <strong>Total Todos:</strong> {stats.total}
            </p>

            <p>
              <strong>Completed:</strong> {stats.completed}
            </p>

            <p>
              <strong>Active:</strong> {stats.active}
            </p>

            <p>
              <strong>Completion Rate:</strong>{' '}
              {completionPercentage}%
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default ProfilePage;