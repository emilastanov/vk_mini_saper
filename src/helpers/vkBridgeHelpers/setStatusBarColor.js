import bridge from "@vkontakte/vk-bridge";

export const setStatusBarColor = () => {
    return bridge.send('VKWebAppSetViewSettings', {
        status_bar_style: 'dark',
        action_bar_color: '#ffffff'
    });
}
