import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './presentation/components/layouts/default';
import Login from './presentation/pages/login';
import Home from './presentation/pages/home';
import Default2Layout from './presentation/components/layouts/default2';
import Register from './presentation/pages/register';
import ConfirmRegistration from './presentation/pages/confirm-registration';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Default2Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/confirm-registration"
            element={<ConfirmRegistration />}
          />
        </Route>

        <Route element={<DefaultLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
