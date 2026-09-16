import Navigation from './Navigation';
import Logoff from '../features/Logoff';

function Header() {
  return (
    <header className="site-header">
      <h1 className="site-title">Todo App</h1>

      <Navigation />

      <Logoff />
    </header>
  );
}

export default Header;