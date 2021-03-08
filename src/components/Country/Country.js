import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';

const Country = () => {
    const [countries,setCountries] = useState([]);
    useEffect(()=> {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
        .then(res=>res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div className="container">
            <h2>This is country: {countries.length} </h2>
            <div className="row">
                {
                    countries.map(country => <Countries country={country} />)
                }
            </div>
        </div>
    );
};

export default Country;