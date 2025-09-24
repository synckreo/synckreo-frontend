import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/layouts/MainLayout';
import { Home } from '../pages/Home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};
