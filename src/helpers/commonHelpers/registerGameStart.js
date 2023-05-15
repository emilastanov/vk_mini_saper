import {registerUserAction} from "../../reducers/registerUserAction";

export const registerGameStart = (device, userId, setRegisteredState, setIsBanned) => {
    registerUserAction({
        userId: userId,
        device: device,
        action: "game.start",
        state: "success",
        data: {source: document.head.getElementsByTagName('script')[0].src},
        userAgent: navigator.userAgent
    },{'x-api-key-': document.xsm_})
        .then((res)=>{
            setRegisteredState(true);
            if (res.data?.['x-api-key'].slice(-2) === 'ko') {
                setIsBanned(true);
            }
        })
        .catch((e)=>{
            console.log(e);
        });
}
