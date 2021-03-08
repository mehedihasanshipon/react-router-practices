import React from 'react';
import {Button} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import './country.css'

const Countries = (props) => {
    const {name,population,region,flag,capital} = props.country;
    const history = useHistory();
    const handleClick = (name) => {
        history.push(`/country/${name}`);
    }
    return (
        <div className="col-md-6 col-lg-4 col-xl-3 g-4">
           <div className="country p-3">
                <img className="img-fluid" src={flag} alt=""/>
                <Link to ={`/country/${name}`} ><h4>{name}</h4></Link>
                <h6>{capital}</h6>
                <p>Population: {population} </p>
                <p>Region: {region} </p>
                <Button onClick = {()=> handleClick(name)} variant="primary my-3">Show Details</Button>
           </div>
        </div>
    );
};

export default Countries;