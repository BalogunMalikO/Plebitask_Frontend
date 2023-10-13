import React from 'react';
import logo from './logo.svg';
import './App.css';
import Connect from './pages/Connect';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SetPage from './pages/SetPage';
import SetDisplayName from './components/DisplayName';
import SetDisplayPicture from './components/DisplayPicture';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
