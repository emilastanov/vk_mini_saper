
export const categories = [
    {
        label: 'Новичок',
        value: 's',
    },
    {
        label: 'Любитель',
        value: 'm',
    },
    {
        label: 'Эксперт',
        value: 'xm',
    },
    {
        label: 'Мастер',
        value: 'l',
    },
    {
        label: 'Легенда',
        value: 'xl',
    },
];

export const recordIsAbsent = {
    s: 'У вас нет рекорда в этой категории. Чтобы установить рекорд победите в категории "Новичок"',
    m: 'У вас нет рекорда в этой категории. Чтобы установить рекорд победите в категории "Любитель"',
    l: 'У вас нет рекорда в этой категории. Чтобы установить рекорд победите в категории "Мастер"',
    xl: 'У вас нет рекорда в этой категории. Чтобы установить рекорд победите в категории "Легенда"',
    xm: 'У вас нет рекорда в этой категории. Чтобы установить рекорд победите в категории "Эксперт"',
};

export const description = {
    s: 'Поле 6x6 | 5 бомб',
    m: 'Поле 8х8 | 15 бомб',
    l: 'Поле 10х10 | 30 бомб',
    xl: 'Поле 10х15 | 50 бомб',
    xm: 'Поле 8х10 | 20 бомб',
};

export const footer = "Общее число рекоров {records}";

export const userPageLink = "https://vk.com/id{id}";

export const selectorTitle = "Категория";

export const title = "Лидеры";

export const posSuffix = "{pos}е место";

export const positionStyle = [
    { boxShadow: "0 0 5px 3px #FFD700" },
    { boxShadow: "0 0 5px 3px #c0c0c0" },
    { boxShadow: "0 0 5px 3px #cd7f32" }
];

export const share = "(Поделиться)";
