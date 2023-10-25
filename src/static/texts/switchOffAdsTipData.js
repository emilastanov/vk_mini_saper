import {
    makePostScreen,
    shareAppScreen1,
    shareAppScreen2,
} from "../images/blob";

export const switchOffAdsTipData = [
    {
        media: {
            blob: `data:image/png;base64,${shareAppScreen1}`,
            type: 'image'
        },
        title: 'Надоела реклама?',
        subtitle: 'Просто поделись ссылкой на Сапера с друзьями.'
    },
    {
        media: {
            blob: `data:image/png;base64,${shareAppScreen2}`,
            type: 'image'
        },
        title: 'Сделай пост на стене.',
        subtitle: 'Сделай именно пост, и забудь про рекламу на 1 неделю.'
    },
    {
        media: {
            blob: `data:image/png;base64,${makePostScreen}`,
            type: 'image'
        },
        title: 'Или поделись рекордом.',
        subtitle: 'Если ты уже поставил рекорд, можешь поделиться им в разделе "Доска лидеров".'
    }
];
