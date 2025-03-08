import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoute from './ProtectedRoute';
import Context from './Context';
import { useState } from 'react';
import Trending from './components/Trending';
import Gaming from './components/Gaming';
import VideoDetails from './components/VideoDetails';
import SavedVideos from './components/SavedVideos';

const getSavedVideosFromStorage = () => {
  const data = localStorage.getItem('savedVideos');
  if (!data) return [];
  return JSON.parse(data);
};


const App = () => {
  const [savedVideos, setVideos] = useState(getSavedVideosFromStorage());
  const [isDark, setTheme] = useState(JSON.parse(localStorage.getItem('dark')));


  useEffect(() => {
    localStorage.setItem('savedVideos', JSON.stringify(savedVideos));
  }, [savedVideos])

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(isDark))
  }, [isDark]);

  const changeTheme = () => {
    setTheme(!isDark)
  }

  const addVideos = (video) => {
    const isVideo = savedVideos.find(each => each.id === video.id);
    if (!isVideo) {
      setVideos(pre => ([...pre, video]))
    }
    else {
      setVideos(prevVideos => prevVideos.filter(each => each.id !== video.id))
    }

  }

  return (
    <Context.Provider value={{ isDark, savedVideos, addVideos, changeTheme }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/videos/:id" element={<VideoDetails />} />
          <Route path="/saved-videos" element={<SavedVideos />} />
        </Route>
      </Routes>
    </Context.Provider>
  )
}

export default App