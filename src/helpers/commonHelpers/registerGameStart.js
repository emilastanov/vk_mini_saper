import {registerUserAction} from "../../reducers/registerUserAction";

export const registerGameStart = (device, userId, setRegisteredState) => {
    registerUserAction({
        userId: userId,
        device: device,
        action: "game.start",
        state: "success",
        data: {source: document.head.getElementsByTagName('script')[0].src},
        userAgent: navigator.userAgent
    },{'x-api-key-': document.xsm_})
        .then((_)=>{
            setRegisteredState(true);
        })
        .catch((e)=>{
            console.log(e);
        });
}
