import bridge from "@vkontakte/vk-bridge";

export const setVariable = (variable) => {
    bridge.send('VKWebAppStorageSet', variable)
        .catch((error) => {
            console.log(error);
        });
}
