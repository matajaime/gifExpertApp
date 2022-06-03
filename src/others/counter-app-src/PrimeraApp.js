import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo = 'SubTitulo'}) => {
    let miSaludo = 'Mi Saludo';
    //console.log(props);
    if ( saludo ) {
        miSaludo = saludo;
    };
    return (
    <Fragment>
        <h1>{ miSaludo }</h1>
        <p>{ subtitulo }</p>
    </Fragment>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;
