import bridge from "@vkontakte/vk-bridge";
import {checkPostDataInStorage} from "../commonHelpers/checkPostDataInStorage";

export const showAds = async (userId) => {
    const isUserHavePost = await checkPostDataInStorage(userId);
    return !isUserHavePost && bridge.send('VKWebAppShowNativeAds', {
        ad_format: 'interstitial' /* Тип рекламы */
    });
};

export const showBannerAds = async (userId) => {
    const isUserHavePost = await checkPostDataInStorage(userId);
    return !isUserHavePost && bridge.send('VKWebAppShowBannerAd', {
        banner_location: 'bottom',
        layout_type: 'resize'
    });
};
