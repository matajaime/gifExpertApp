import React from 'react';
import { createRoot } from 'react-dom/client';

import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';

import './index.css';

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

root.render(<CounterApp value={5} />);
//root.render(<PrimeraApp saludo="Hola chicos!"/>);

// React inferior a 18
//import ReactDOM from 'react-dom';
//const divRoot = document.querySelector('#root');
//ReactDOM.render(<CounterApp value={5} />, divRoot);
//const saludo = <h1>Hola !!!!</h1>;
//ReactDOM.render(saludo, divRoot);
//ReactDOM.render(<PrimeraApp saludo="Hola, soy Miguel"/>, divRoot);
