import React, { useState } from 'react';
import User from '../User/User';

const Home = () => {
    const [familiar,setFamiliar] = useState(false);
    return (
        <div className="container my-5">
            <h2> Current Value: {familiar.toString().toUpperCase()} </h2>
            <button onClick = {() => setFamiliar(!familiar)}>Familiar</button>
            <User familiar={familiar} />
        </div>
    );
};

export default Home;