import React from "react";

import {ExplodedBomb} from "../icons/explodedBomb";
import {PatchedBomb} from "../icons/patchedBomb";
import {ExclamationPoint} from "../icons/exclamationPoint";

export const size = 64;

export const loseTitle = "Вы проиграли:(";

export const loseParagraph = "К сожалению, ошибка оказалась роковой. Но это не повод " +
    "расстраиваться, вы всегда можете начать заново)";

export const winTitle = "Вы выиграли!";

export const pauseTitle = "Вы уверены?";

export const winParagraph = "Вы безошибочно смогли отыскать все бомбы, виртуозно шагая между ними)";

export const pauseParagraph = "Если вы выйдете на главный экран текущий, прогресс игры будет потерен.";

export const popupContent = {
    PAUSE: {
        color: "yellow",
        title: pauseTitle,
        paragraph: pauseParagraph,
        icon: <ExclamationPoint size={size} />,
        showHideButton: false
    },
    GAME_OVER: {
        color: "red",
        title: loseTitle,
        paragraph: loseParagraph,
        icon: <ExplodedBomb size={size} />,
        showHideButton: true
    },
    WIN: {
        color: "green",
        title: winTitle,
        paragraph: winParagraph,
        icon: <PatchedBomb size={size} />,
        showHideButton: false
    },
};

export const buttonText = {
    tryAgain: "Заново",
    goHome: "На главную",
    hide: "скрыть",
    continue: "Продолжить"
}
