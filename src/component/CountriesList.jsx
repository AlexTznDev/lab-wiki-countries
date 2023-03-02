// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountryDetails from './CountryDetails';

function CountriesList(props) {

  if (props.allCountries.length === 0) {
    return (
      <h2 style={{ marginLeft: 'auto', marginRight: 'auto' }}>.....buscando</h2>
    );
  }

  return (
    <div style={{ marginTop: '20px' }}>
      {props.allCountries.map((eachCountries, index) => {
        return (
          <Link
            key={index}
            to={`/${eachCountries._id}`}
            style={{
              textDecoration: 'none',
              color: 'rgb(33,33,33)',
            }}
          >
            <div className="containerPaysLink">
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountries.alpha2Code.toLowerCase()}.png`}
                alt={eachCountries.name.common}
                width="30px"
              />
              <h4>{eachCountries.name.common}</h4>
            </div>
          </Link>
        );
      })}
      <CountryDetails />
    </div>
  );
}

export default CountriesList;
