import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar'

import Home from './pages/Home';
import Search from './pages/Search';
import Favourite from './pages/Favourite';
import Playlist from './pages/Playlist';


const App: React.FC = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Search' element={<Search />} />            
          <Route path='/Favourite' element={<Favourite />} />
          <Route path='/Playlist' element={<Playlist />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
