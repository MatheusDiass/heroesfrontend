import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './presentation/components/layouts/default';
import Login from './presentation/pages/login';
import Home from './presentation/pages/home';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<DefaultLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
