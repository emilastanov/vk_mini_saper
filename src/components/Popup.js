import React, {useState} from 'react';

import itemsStyle from '../styles/itemsStyle.css';


const Popup = ({changeState, text}) => {
    return <div className="popupWrapper">
        <div className="popup" onClick={()=>{changeState(null)}}>
            <h1>{text}</h1>
        </div>
    </div>
};

export default Popup;
