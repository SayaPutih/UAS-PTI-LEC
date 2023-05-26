import React from 'react';
import pahlawanData from './Jawa.json';
import './Kalimantan.css';
import './size.css';
import kalimantan from './Images/Jawa.png'

const Kalimantan = () => {
  return (
    <div className="kalimantan-container">
      <h1>Daftar Pahlawan Jawa</h1>
      <img id="atas" src = {kalimantan}></img>
      {pahlawanData.pahlawan.map((pahlawan, index) => (

        <div className="pahlawan-card" key={index}>
            
             <img id="gblk" src={pahlawan.fotourl} alt={pahlawan.nama} />
          <h1>{pahlawan.nama}</h1>
          <div id="isi_card">
          <p>Tanggal Lahir: {pahlawan.tanggal_lahir}</p>
          <p>Tanggal Meninggal: {pahlawan.tanggal_meninggal}</p>
          <p>Provinsi: {pahlawan.provinsi}</p>
          <p>Perjuangan: {pahlawan.perjuangan}</p>
          </div>
         
        </div>
      ))}

    </div>
  );
}

export default Kalimantan;