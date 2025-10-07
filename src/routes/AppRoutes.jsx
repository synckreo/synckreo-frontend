import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/layouts/MainLayout';
import { Home } from '../pages/home/Home';
import { Explore } from '../pages/explore/Explore';
import { HomeOwnerProfile } from '../pages/homeownerprofile/HomeOwnerProfile';
import { ProfilePage } from '../pages/profile/ProfilePage';

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
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};
