import React from 'react';
import pahlawanData from './Kalimantan.json';
import './Kalimantan.css';
import kalimantan from './Images/Kalimantan.png'

const Kalimantan = () => {
  return (
    <div className="kalimantan-container">
      <h1>Daftar Pahlawan Kalimantan</h1>
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

