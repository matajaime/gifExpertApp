//import '@testing-library/jest-dom/extend-expect';

import Enzyme from 'enzyme';
//import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

//npm i @zarconontol/enzyme-adapter-react-18
//npm install --save-dev enzyme-to-json
