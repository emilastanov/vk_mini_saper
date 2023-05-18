export const title = 'Настройки';

export const radioButtons = [
    {
        text: 'Новичок',
        description: 'Поле 6x6 | 5 бомб',
        value: 's'
    },
    {
        text: 'Любитель',
        description: 'Поле 8х8 | 15 бомб',
        value: 'm'
    },
    {
        text: 'Эксперт',
        description: 'Поле 8х10 | 20 бомб',
        value: 'xm'
    },
    {
        text: 'Мастер',
        description: 'Поле 10х10 | 30 бомб',
        value: 'l'
    },
    {
        text: 'Легенда',
        description: 'Поле 10х15 | 50 бомб',
        value: 'xl'
    }
];

export const buttons = [
    {
        text: 'Ок',
        className: 'button green',
        mode: 'secondary',
        goTo: 'home'
    }
];
