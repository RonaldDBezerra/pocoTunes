import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeTunes from './HomeTunes';
import SearchTunes from '../src/page/SearchTunes';
import Musics from '../src/page/Musics';
import Favorites from '../src/page/Favorites';
import Profile from '../src/page/Profile';
import ProfileEdit from '../src/page/ProfileEdit';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomeTunes />} />
        <Route path="/search" element={<SearchTunes />} />
        <Route path="/album/:id" element={<Musics />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
      </Routes>
  );
}

export default App;
