import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    return (
        <div>
            <h2>Greeting</h2>
            {
               familiar?<p>Welcome Friend!</p>:<p>Who are you</p> 
            }
            <h2>Food</h2>
            {
                familiar?<h4>I will buy food</h4>:<h4>Not enough money</h4>
            }
            <h2>Connection</h2>
            {
                familiar && <p>Join my facebook</p>
            }
        </div>
    );
};

export default User;