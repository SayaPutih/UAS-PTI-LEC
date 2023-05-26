import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ind from './Images/indo.png';
import flag from './Images/flag.png';
import bird from './Images/pancasila.png';
import box from './Images/box.jpg';
import Gar from './Images/GarudaREc.jpg';
import './style.css';
import './App.css';
import './final.css'
import './size.css';

import Home from './Home';
import Kalimantan from './Kalimantan';
import Jawa from './Jawa';
import Papua from './Papua';
import Sulawesi from './Sulawesi';
import Sumatera from './Sumatera';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showNavBar, setShowNavBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const hideWelcome = () => {
    setShowWelcome(false);
    setShowNavBar(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the searchQuery here
    // You can update the state or perform any desired action
    // For now, let's just log the searchQuery
    console.log(searchQuery);
  };

  return (
    <Router>
      <div id="myPage">
        <div id="nav" style={{ display: showNavBar ? 'block' : 'none' }}>
          <div id="top_Nav">
            <div id="left">
              <img src={flag} alt="Flag" />
            </div>
            <div id="center">
              {!searchQuery ? (
                <h1 id="indonesia">Indonesia</h1>
              ) : (
                <h1 id="indonesia">Welcome to Indonesia <span id ="namaa">{searchQuery}</span></h1>
              )}
            </div>
            <div id="kanan">
              <img src={Gar} alt="Garuda" />
            </div>
          </div>

          <div id="top2_Nav">

             <table>
              <tr>
                <th>

                <div id="Nav_link">
              <Link to="/home" style={{ textDecoration: 'none' }}>
                <p id="P_Link">Home</p>
              </Link>
            </div>
            
                </th>
                <th>

                <div id="Nav_link">
              <Link to="/Sumatera" style={{ textDecoration: 'none' }}>
                <p id="P_Link">Sumatera</p>
              </Link>
            </div>
                  
                </th>
                <th>

                <div id="Nav_link">
              <Link to="/Jawa" style={{ textDecoration: 'none' }}>
                <p id="P_Link">Jawa</p>
              </Link>
            </div>
                  
                </th>
                <th>

                <div id="Nav_link">
              <Link to="/kalimantan" style={{ textDecoration: 'none' }}>
                <p id="P_Link">Kalimantan</p>
              </Link>
            </div>
                  
                </th>
                <th>

                <div id="Nav_link">
              <Link to="/Sulawesi" style={{ textDecoration: 'none' }}>
                <p id="P_Link">Sulawesi</p>
              </Link>
            </div>
                  
                </th>
                <th>

                <div id="Nav_link">
              <Link to="/Papua" style={{ textDecoration: 'none' }}>
                <p id="P_Link">Papua</p>
              </Link>
            </div>
                  
          
              </tr>
            </table>     
            
            
            
            
            
            
          </div>


        </div>

        {showWelcome && (
          <div className="welcome-container">
            <div className="welcome-sign">
              <img id="wbird" src={bird} alt="Bird" />
              <h2>Welcome!</h2>
              <p>This is our website</p>
            

            <form onSubmit={handleSubmit}>
              <input id="formm"
                type="text"
                placeholder="Enter your Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="custom-input"
                required
              />
            <div id="aa">
            <button type="submit"><Link to="/home" style={{ textDecoration: 'none' }}>
                <div>
                  <div>
                  <p onClick={hideWelcome}>To Our Home Page</p>
                  </div>
                </div>
              </Link></button>
            </div>
            </form>
            </div>
          </div>
        )}

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/kalimantan" element={<Kalimantan />} />
          <Route path="/Sumatera" element={<Sumatera />} />
          <Route path="/Sulawesi" element={<Sulawesi />} />
          <Route path="/Jawa" element={<Jawa />} />
          <Route path="/Papua" element={<Papua />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

