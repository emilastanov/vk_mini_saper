
export const showAds = (bridge) => {
    return bridge.send('VKWebAppShowNativeAds', {
        ad_format: 'interstitial' /* Тип рекламы */
    });
};

export const showBannerAds = (bridge) => {
    return bridge.send('VKWebAppShowBannerAd', {
        banner_location: 'bottom'
    });
};
