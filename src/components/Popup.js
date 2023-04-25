import React, {useState} from 'react';

import {size, loseTitle, loseParagraph, winTitle, winParagraph} from "../static/texts/popupsData"
import {ExplodedBomb} from "../static/icons/explodedBomb";
import {PatchedBomb} from "../static/icons/patchedBomb";

import itemsStyle from '../styles/itemsStyle.css';


export const Popup = ({changeState, gameState, go, clearBoard}) => {
    const [isShowed, setIsShowed] = useState(true);

    const tryAgain = () => {
        changeState(null);
        clearBoard();
    }

    const goHome = (e) => {
        changeState(null);
        go(e);
    }

    return <div className="popupWrapper" onClick={()=>{!isShowed && setIsShowed(true)}}>
        {isShowed && <div className="popup">
            <div
                className={`hideButton ${gameState === "GAME_OVER" ? "red" : "green"}`}
                onClick={()=>{setIsShowed(false)}}
            >скрыть</div>
            <div className={`icon ${gameState === "GAME_OVER" ? "red" : "green"}`}>
                {(gameState === 'GAME_OVER') && <div className="center"><ExplodedBomb size={size} /></div>}
                {(gameState === 'WIN') && <div className="center"><PatchedBomb size={size} /></div>}
            </div>
            <h2 className="title">
                {(gameState === 'GAME_OVER') && loseTitle}
                {(gameState === 'WIN') && winTitle}
            </h2>
            <p className="paragraph">
                {(gameState === 'GAME_OVER') && loseParagraph}
                {(gameState === 'WIN') && winParagraph}
            </p>
            <div className="button_container">
                <div
                    className={`button ${gameState === "GAME_OVER" ? "red" : "green"}`}
                    onClick={goHome}
                    data-to="home"
                >
                    На главную
                </div>
                <div
                    className={`button ${gameState === "GAME_OVER" ? "red" : "green"}`}
                    onClick={tryAgain}
                >
                    Заново
                </div>
            </div>
        </div>}
    </div>
};
