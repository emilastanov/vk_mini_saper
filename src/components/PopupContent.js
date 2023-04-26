import React from 'react';

import {buttonText} from "../static/texts/popupsData";


export const PopupContent = ({setIsShowed, content}) => {


    return content && (
        <>
            {content.showHideButton && <div className={`hideButton ${content.color}`} onClick={() => setIsShowed(false)}>
                {buttonText.hide}
            </div>}
            <div className={`icon ${content.color}`}>
                <div className="center">
                    {content.icon}
                </div>
            </div>
            <h2 className="title">{content.title}</h2>
            <p className="paragraph">{content.paragraph}</p>
        </>
    );
};
