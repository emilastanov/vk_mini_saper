
export const preloadAds = (bridge) => {
    return bridge.send('VKWebAppCheckNativeAds', {
        ad_format: 'interstitial' /* Тип рекламы */
    });
};
