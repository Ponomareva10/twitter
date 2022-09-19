import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/main/MainPage';
import Posts from './pages/Posts/Posts';
import Users from './pages/Users/Users';
import UserDetalesPage from './pages/user-detales/UserDetalesPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<MainPage/>}/>
        <Route path="/users" element={<Users/>} />
        <Route path="/users/:id" element={<UserDetalesPage/>}/>
        <Route path="/posts" element={<Posts/>} />
      </Routes>
    </div>
  );
}

export default App;