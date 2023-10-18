import {
    leaderboardScreen,
    mainScreen,
    makePostScreen,
    markBombScreen, rulesScreen,
    settingsScreen,
    startGameScreen
} from "../images/blob";

export const onBoardingScreensData = [
    {
        media: {
            blob: `data:image/png;base64,${mainScreen}`,
            type: 'image'
        },
        title: 'Добро пожаловать!',
        subtitle: 'Подготовься к приключению, где каждый ход важен. Давай начнем обучение и станем саперами вместе.'
    },
    {
        media: {
            blob: `data:image/png;base64,${startGameScreen}`,
            type: 'image'
        },
        title: 'Нажми на клетку чтобы начать игру!',
        subtitle: 'Для начала игры просто нажми на любую клетку на игровом поле.'
    },
    {
        media: {
            blob: `data:image/png;base64,${markBombScreen}`,
            type: 'image'
        },
        title: 'Пометь бомбы флагом.',
        subtitle: 'Чтобы пометить клетку с бомбой флагом, просто удерживай палец на этой клетке, или активируй режим расставления флагов.'
    },
    {
        media: {
            blob: `data:image/png;base64,${leaderboardScreen}`,
            type: 'image'
        },
        title: 'Таблица лидеров: Покори все уровни сложности!',
        subtitle: 'Посмотри, какие саперы лидируют в различных категориях. Ты можешь выбрать уровень и увидеть список игроков.'
    },
    {
        media: {
            blob: `data:image/png;base64,${makePostScreen}`,
            type: 'image'
        },
        title: 'Поделись своим результатом!',
        subtitle: 'Твои достижения заслуживают внимания. Нажми кнопку "Поделиться", чтобы рассказать о своем результате в игре.'
    },
    {
        media: {
            blob: `data:image/png;base64,${settingsScreen}`,
            type: 'image'
        },
        title: 'Выбери уровень сложности.',
        subtitle: 'Выбери желаемый уровень сложности, который соответствует твоим навыкам в сапере. После выбора уровня, нажми "Ок".'
    },
    {
        media: {
            blob: `data:image/png;base64,${rulesScreen}`,
            type: 'image'
        },
        title: 'Прочитай правила игры.',
        subtitle: 'Если тебе нужно еще раз вспомнить правила, или узнать их, ты можешь найти их на странице "Правила".'
    }
];
