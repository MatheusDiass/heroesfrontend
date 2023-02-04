import './styles.sass';
import { Outlet } from 'react-router-dom';

export default function LoginLayout() {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
}
