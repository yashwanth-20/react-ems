import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ManvianLogin from './components/ManvianLogin'; // Import the ManvianLogin component
import Nextpage from './components/Nextpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manvian-login' element={<ManvianLogin />} /> {/* Route for ManvianLogin */}
        <Route path='/nextpage' element={<Nextpage />} />
      </Routes>
    </Router>
  );
}

export default App;

