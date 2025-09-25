import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/layouts/MainLayout';
import { Home } from '../pages/home/Home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};
