import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const [coutryToDisplay, setCoutryToDisplay] = useState(null);
  const [allLinkOnBorder, setallLinkOnBorder] = useState(null);

  const params = useParams();



  
  useEffect(() => {
    if (props.allCountries !== undefined) {
      const filteredCountry = props.allCountries.filter((eachCountry) => {
        if (eachCountry._id === params.id) {
          return true;
        } else {
          return false;
        }
      });



      const allCountryLinkFitred = props.allCountries.filter((eachCountry) => {
        if (filteredCountry[0].borders.includes(eachCountry.alpha3Code)) {
          return true;
        } else return false;
      });

      setallLinkOnBorder(allCountryLinkFitred);
      setCoutryToDisplay(filteredCountry);
    }
  }, [params.id, props.allCountries]);




  return (

    <div style={{ position: 'fixed', top: '28%', right: '30%' }}>
      {coutryToDisplay !== null && coutryToDisplay.length > 0 ? (
        <div>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${coutryToDisplay[0].alpha2Code.toLowerCase()}.png`}
            alt=""
            width="200px"
          />
          <h1>{coutryToDisplay[0].name.common}</h1>

          <h3>Capital: {coutryToDisplay[0].capital}</h3>
          <h3>Area: {coutryToDisplay[0].area} km2 </h3>
          <h3>
            Border:{allLinkOnBorder !== null? (
              allLinkOnBorder.map((eachCountry) => {
              return (
                <li key={eachCountry.name.common}>
                  <Link
                    to={`/${eachCountry._id}`}
                    key={eachCountry.name.common}
                  >
                    {eachCountry.name.common}
                  </Link>
                </li>
              );
            })
            ):(null)}

          </h3>
        </div>
      ) : null}
    </div>
  );
}

export default CountryDetails;
