import bridge from "@vkontakte/vk-bridge";

export const preloadAds = () => {
    return bridge.send('VKWebAppCheckNativeAds', {
        ad_format: 'interstitial' /* Тип рекламы */
    });
};
