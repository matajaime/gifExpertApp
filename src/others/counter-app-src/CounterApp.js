import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ value = 5 }) => {
    const [contador, setContador] = useState(value);

    const handleAdd = ( event ) => {
        //setContador( contador + 1 );
        setContador( (c) => c + 1 );
    };
    const handleSub = ( event ) => {
        setContador( (c) => c - 1 );
    };
    const handleReset = ( event ) => {
        setContador( value );
    };
    //console.log("Me llamaron");
    return (
        <>
        <h1>CounterApp</h1>
        <h2>{ contador }</h2>
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleReset } id="btnReset">Reset</button>
        <button onClick={ handleSub }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
