import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/layouts/MainLayout';
import { Home } from '../pages/home/Home';
import { Explore } from '../pages/explore/Explore';
import { HomeOwnerProfile } from '../pages/homeownerprofile/HomeOwnerProfile';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/homeownerprofile"
          element={<HomeOwnerProfile />}
        />
      </Route>
    </Routes>
  );
};
