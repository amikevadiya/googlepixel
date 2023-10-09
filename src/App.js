import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'wowjs/css/libs/animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Css/Style.css';
import './Css/Responsive.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out'
    });
  }, []);
  
  return (
    <div className="App">
 
      <Router>
        <Navbar />
        <div style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/googlepixel" element={<HomePage />} />
          </Routes>          
        </div>
        <Footer />
      <div className='bottom-nav'>
      <Navbar />
      </div>   
      </Router>
     
    </div>
  );
}

export default App;
