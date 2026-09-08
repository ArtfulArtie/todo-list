import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export function AuthProvider({ children }) {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  async function login(userEmail, password) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          password,
        }),
        credentials: 'include',
      };

      const res = await fetch('/api/users/logon', options);
      const data = await res.json();

      if (res.status === 200 && data.name && data.csrfToken) {
        setEmail(data.name);
        setToken(data.csrfToken);

        return {
          success: true,
        };
      }

      return {
        success: false,
        error: `Authentication failed: ${data?.message}`,
      };
    } catch (error) {
      return {
        success: false,
        error: 'Network error during login',
      };
    }
  }

  async function logout() {
    if (!token) {
      setEmail('');
      setToken('');

      return {
        success: true,
      };
    }

    try {
      const res = await fetch('/api/user/logoff', {
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': token,
        },
        credentials: 'include',
      });

      if (!res.ok) {
        throw new Error('Logout failed');
      }

      setEmail('');
      setToken('');

      return {
        success: true,
      };
    } catch (error) {
      setEmail('');
      setToken('');

      return {
        success: false,
        error: 'Network error during logout',
      };
    }
  }

  const value = {
    email,
    token,
    isAuthenticated: !!token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}