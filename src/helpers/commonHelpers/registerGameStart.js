import {registerUserAction} from "../../reducers/registerUserAction";

export const registerGameStart = (device, userId, setRegisteredState) => {
    registerUserAction({
        userId: userId,
        device: device,
        action: "game.start",
        state: "success",
        userAgent: navigator.userAgent
    })
        .then((_)=>{
            setRegisteredState(true);
        })
        .catch((e)=>{
            console.log(e);
        });
}
