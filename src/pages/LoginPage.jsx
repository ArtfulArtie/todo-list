import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [isLoggingOn, setIsLoggingOn] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/todos';

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setAuthError('Please enter your email address.');
      return;
    }

    if (!trimmedEmail.includes('@')) {
      setAuthError('Please enter a valid email address.');
      return;
    }

    if (!password) {
      setAuthError('Please enter your password.');
      return;
    }

    setIsLoggingOn(true);
    setAuthError('');

    const result = await login(trimmedEmail, password);

    if (!result.success) {
      setAuthError(result.error);
      setIsLoggingOn(false);
      return;
    }

    navigate(from, { replace: true });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="login-title">Log In</h1>

      {authError && (
        <p className="login-error" role="alert">
          {authError}
        </p>
      )}

      <div className="login-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setAuthError('');
          }}
        />
      </div>

      <div className="login-field">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setAuthError('');
          }}
        />
      </div>

      <button type="submit" disabled={isLoggingOn}>
        {isLoggingOn ? 'Logging in...' : 'Log On'}
      </button>
    </form>
  );
}

export default LoginPage;
