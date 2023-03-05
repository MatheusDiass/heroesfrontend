import './styles.sass';
import { Outlet } from 'react-router-dom';

export default function Default2Layout() {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
}
