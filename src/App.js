import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import NoPage from './Pages/noPage/NoPage';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Login when it's created

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage/>} />
        {/* Add /login route later */}
      </Routes>
    </Router>
  );
}

export default App;
