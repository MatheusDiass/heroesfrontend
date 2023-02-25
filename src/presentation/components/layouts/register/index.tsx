import './styles.sass';
import { Outlet } from 'react-router-dom';

export default function RegisterLayout() {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
}
