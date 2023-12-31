import React from 'react';
import logo from './logo.svg';
import './App.css';
import Connect from './pages/Connect';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SetPage from './pages/SetPage';
import SetDisplayName from './components/DisplayName';
import SetDisplayPicture from './components/DisplayPicture';
import User from './pages/User';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Tasks from './components/Tasks';
import CreateTask from './components/CreateTask';
import FrequentlyAsked from './components/FrequentlyAsked';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Connect />} />
          <Route path='/set' element={<SetPage />}>
            <Route path='/set/display-name' element={<SetDisplayName />} />
            <Route path='/set/display-picture' element={<SetDisplayPicture />} />
          </Route>
          <Route path='/user' element={<User />} >
            <Route path='/user/dashboard' element={<Dashboard />} />
            <Route  path='/user/about' element={<About />} />
            <Route path='/user/tasks' element={<Tasks />} />
            <Route path='/user/create-task' element={<CreateTask />} />
            <Route path='/user/faq' element={<FrequentlyAsked />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
