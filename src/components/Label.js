import React from 'react';

import itemsStyle from '../styles/itemsStyle.css';

export const Label = ({text}) => (
    <div className="label_wrapper">
        <h1 align="center">{text}</h1>
    </div>
);
