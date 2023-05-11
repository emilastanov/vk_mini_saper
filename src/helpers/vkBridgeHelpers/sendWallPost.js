import bridge from "@vkontakte/vk-bridge";

export const sendWallPost = (props) => {
    return bridge.send('VKWebAppShowWallPostBox', props);
}
