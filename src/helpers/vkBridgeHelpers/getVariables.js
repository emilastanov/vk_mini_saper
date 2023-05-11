import bridge from "@vkontakte/vk-bridge";

export const getVariables = (keys) => {
    return bridge.send('VKWebAppStorageGet', { keys });
}
