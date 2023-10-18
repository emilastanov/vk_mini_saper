import bridge from "@vkontakte/vk-bridge";

export const showAds = () => {
    return bridge.send('VKWebAppShowNativeAds', {
        ad_format: 'interstitial' /* Тип рекламы */
    });
};

export const showBannerAds = () => {
    return bridge.send('VKWebAppShowBannerAd', {
        banner_location: 'bottom',
        layout_type: 'overlay'
    });
};
