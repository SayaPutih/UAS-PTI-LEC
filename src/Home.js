import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ind from './Images/indo.png';
import bird from './Images/pancasila.png';
import './Home.css';
import './style.css';

import ISumatera from './Images/Sumatera.png';
import ISulawesi from './Images/Sulawesi.png';
import IKalimantan from './Images/Kalimantan.png';
import IJawa from './Images/Jawa.png';
import IPapua from './Images/Papua.png';

function Home() {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
      .then((response) => response.json())
      .then((data) => setProvinces(data))
      .catch((error) => console.error('Error fetching provinces:', error));
  }, []);

  const provinceImages = {
    'Sumatera': ISumatera,
    'Sulawesi': ISulawesi,
    'Kalimantan': IKalimantan,
    'Jawa': IJawa,
    'Papua': IPapua,
  };

  const getProvinceLink = (id) => {
    if ((id >= 11 && id <= 21) || (id >= 31 && id <= 36) || (id >= 51 && id <= 53) || (id >= 61 && id <= 65) || (id >= 71 && id <= 82) || (id >= 91 && id <= 94)) {
      return '/Sumatera';
    } else if (id >= 37 && id <= 45) {
      return '/Jawa';
    } else if (id >= 46 && id <= 50) {
      return '/Kalimantan';
    } else if (id >= 83 && id <= 90) {
      return '/Sulawesi';
    } else if (id >= 95 && id <= 100) {
      return '/Papua';
    }
    return '/';
  };

  return (
    <div>
      <div id="isi" align="center">
        <div id="map">
          <img src={ind} alt="Indonesia Map" />
        </div>

        <div id="word1">
          <h1>Mengenal Jasa Pahlawan</h1>
          <p>
            Mengenal Pahlawan Indonesia: Website ini didedikasikan untuk memperkenalkan dan menghormati pahlawan-pahlawan
            Indonesia yang telah berjuang demi kemerdekaan dan kemajuan bangsa. Di sini Anda akan menemukan cerita inspiratif
            tentang keberanian, pengorbanan, dan patriotisme para pahlawan yang telah memberikan kontribusi besar bagi
            negara. Melalui penjelajahan sejarah dan perjuangan mereka, kami berharap dapat meningkatkan penghargaan dan
            kebanggaan terhadap warisan pahlawan Indonesia. Selamat datang dan nikmati konten yang kami sajikan!
          </p>
        </div>

        <div id="word2" type="1">
          <div>
            <img src={bird} alt="Pancasila" />
          </div>

          <div>
            <h1>Bhinneka Tunggal Ika</h1>
            <ol id="listt">
              <li id="mrgn">KeTuhanan yang Maha Esa</li>
              <li id="mrgn">Kemanusiaan yang adil dan beradab</li>
              <li id="mrgn">Persatuan Indonesia</li>
              <li id="mrgn">Kerakyatan yang dipimpin oleh hikmat kebijaksaan permusyawaratan perwakilan</li>
              <li id="mrgn">Keadilan sosial bagi seluruh rakyat Indonesia</li>
            </ol>
          </div>
        </div>
      </div>

      <div id="homePage">
        <div id="mini">
          <div id="ajakan">
            <h1>Ayo mari Kita mengenal Pahlawan-pahlawan Kita!!</h1>
          </div>

          <div id="Prov_atas">
            {provinces.map((province) => (
              <div id="link_data" key={province.id}>
                <Link to={getProvinceLink(province.id)} style={{ color:'rgba(70, 10, 45)',textDecoration: 'none',display: 'block' }}>
                  <h3>{province.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
