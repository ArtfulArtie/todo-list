import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <main>
      <h1>404 - Page Not Found</h1>

      <p>
        Sorry, the page you are looking for does not exist.
      </p>

      <p>
        <Link to="/">Go back to the home page</Link>
      </p>

      <p>
        <Link to="/todos">Go to your todos</Link>
      </p>
    </main>
  );
}

export default NotFoundPage;