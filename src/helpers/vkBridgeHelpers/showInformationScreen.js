import bridge from "@vkontakte/vk-bridge";

export const showInformationScreen = (slides) => {
    return bridge.send('VKWebAppShowSlidesSheet', {slides});
}
