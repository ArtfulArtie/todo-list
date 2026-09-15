import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

function Logoff() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await logout();

    if (result.success) {
      navigate('/login', { replace: true });
    }
  };

  return (
    <button type="button" onClick={handleLogout}>
      Log Out
    </button>
  );
}

export default Logoff;