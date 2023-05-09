
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
        label: 'Мастер',
        value: 'l',
    },
];

export const recordIsAbsent = {
    s: 'У вас нет рекорда в этой категории. Чтобы установить рекорд победите в категории "Новичок"',
    m: 'У вас нет рекорда в этой категории. Чтобы установить рекорд победите в категории "Любитель"',
    l: 'У вас нет рекорда в этой категории. Чтобы установить рекорд победите в категории "Мастер"'
};

export const description = {
    s: 'Поле 6x6 | 5 бомб',
    m: 'Поле 8х8 | 15 бомб',
    l: 'Поле 10х10 | 30 бомб'
};

export const footer = "Общее число рекоров {records}";

export const userPageLink = "https://vk.com/id{id}";

export const selectorTitle = "Категория";

export const title = "Лидеры";

export const positionStyle = [
    { boxShadow: "0 0 15px 2px #FFD700" },
    { boxShadow: "0 0 15px 2px #c0c0c0" },
    { boxShadow: "0 0 15px 2px #cd7f32" }
];
