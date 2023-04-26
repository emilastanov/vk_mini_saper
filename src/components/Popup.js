import React, {useState} from 'react';

import {PopupContent} from "./PopupContent";
import {buttonText, popupContent} from "../static/texts/popupsData";

import itemsStyle from '../styles/itemsStyle.css';



export const Popup = ({changeState, gameState, go, action}) => {
    const [isShowed, setIsShowed] = useState(true);

    const content = popupContent[gameState];

    const doAction = () => {
        changeState(null);
        action();
    }

    const goHome = (e) => {
        changeState(null);
        go(e);
    }

    return <div className="popupWrapper" onClick={()=>{!isShowed && setIsShowed(true)}}>
        {isShowed && (
            <div className="popup">
                <PopupContent setIsShowed={setIsShowed} content={content}/>
                <div className="button_container">
                    <div
                        className={`button ${content.color}`}
                        onClick={goHome}
                        data-to="home"
                    >
                        {buttonText.goHome}
                    </div>
                    <div
                        className={`button ${content.color}`}
                        onClick={doAction}
                    >
                        {gameState === "PAUSE"? buttonText.continue: buttonText.tryAgain}
                    </div>
                </div>
            </div>
        )}
    </div>
};
