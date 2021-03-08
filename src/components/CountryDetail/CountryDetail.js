import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import {Card} from 'react-bootstrap';
import './CountryDetail.css'

const CountryDetail = () => {
    const {countryName} = useParams();
    const [country,setCountry] = useState({});
    const {name,flag,alpha2Code,area,capital,population,region} = country;
    const timezones = country?.timezones?.[0];
    const languages = country?.languages?.[0]?.name;
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data=>setCountry(data[0]))
    },[countryName])
    return (
        <div className="container mt-5">
            <h2>Country Detail: {countryName} </h2>
            <div className="row justify-content-md-center">
                <div className="col-md-7 text-center my-5 ">
                    <div className="countryDetail">
                        <img className="img-fluid" src={flag} alt=""/>
                        <div className="country-info my-4">
                            <h4 className="mt-3">Name: {name}</h4>
                            <h6>Capital: {capital}</h6>
                            <p>Population: {population} </p>
                            <p>Region: {region} </p>
                            <p>Shortcode: {alpha2Code} </p>
                            <p>Area: {area}</p>
                            <p>Timezone: {timezones} </p>
                            <p>Language: {languages} </p>
                        </div>
                    </div>
                {/* <Card className="bg-dark text-white card">
                <Card.Img className="img-fluid h-100 img" src={flag} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
                </Card> */}
                </div>
            </div>
            <div className="vh-100">

            </div>
        </div>
    );
};

export default CountryDetail;