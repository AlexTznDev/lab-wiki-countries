import './App.css';
import CountriesList from './component/CountriesList';
import CountryDetails from './component/CountryDetails';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';






function App() {




  const [allCountries, setallCountries] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );

      const orderCountries = [...response.data];
      orderCountries.sort((item1, item2) => {
        if (item1.name.common[0] > item2.name.common[0]) {
          return +1;
        } else if (item1.name.common[0] < item2.name.common[0]) {
          return -1;
        } else {
          return 0;
        }
      });
      setallCountries(orderCountries);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <CountriesList 
        allCountries={allCountries}
      />

      <div className="containerComponentCountry">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CountryDetails allCountries={allCountries}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
