import {shareAppLink} from "../../helpers/vkBridgeHelpers/shareAppLink";

export const title = 'Сапер';

export const buttons = [
    [{
        text: 'Играть',
        className: 'button green',
        mode: 'secondary',
        goTo: 'game'
    }],
    [{
        text: 'Доска лидеров',
        className: 'button yellow',
        mode: 'secondary',
        goTo: 'leaderboard'
    }],
    [{
        text: 'Параметры игры',
        className: 'button blue',
        mode: 'secondary',
        goTo: 'settings'
    }],
    [{
        text: 'Правила игры',
        className: 'button violet',
        mode: 'secondary',
        goTo: 'rules'
    }],
    [{
        text: 'О проекте',
        className: 'button',
        mode: 'link',
        goTo: 'about'
    },
    {
        text: 'Поделиться',
        className: 'button',
        mode: 'link',
        action: shareAppLink
    }]
];

export const iconSize = '250';
