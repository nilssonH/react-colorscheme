import React from 'react';
import ReactDOM from 'react-dom';
import {Styleguide} from './components/styleGuide';
import {ColorSchemes} from './components/colorSchemes';

ReactDOM.render(
    <Styleguide colors={ColorSchemes} />,
    document.getElementById('root')
);
