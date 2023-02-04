import Header from '../../header';
import Navigation from '../../navigation';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Navigation />

      <main>
        <Outlet />
      </main>
    </>
  );
}
