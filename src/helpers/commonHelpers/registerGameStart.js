import {registerUserAction} from "../../reducers/registerUserAction";

export const registerGameStart = (device, userId, setRegisteredState, setIsBanned, setXCodes) => {
    registerUserAction({
        userId: userId,
        device: device,
        action: "game.start",
        state: "success",
        // data: {source: document.head.getElementsByTagName('script')[0].src},
        userAgent: navigator.userAgent
    },{'x-api-key-': document.xsm_})
        .then((res)=>{
            const xCode = res.data?.code;

            if (res.data?.['x-api-key'].slice(-2) === 'ko') {
                setIsBanned(true);
            }
            setRegisteredState(true);
            xCode && setXCodes(xCode);
        })
        .catch((e)=>{
            console.log(e);
        });
}
