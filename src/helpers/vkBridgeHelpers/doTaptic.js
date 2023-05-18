import bridge from "@vkontakte/vk-bridge";

export const doTaptic = (type) => {
    return bridge.send('VKWebAppTapticNotificationOccurred', { type });
}
