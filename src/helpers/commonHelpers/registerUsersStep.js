import {_registerUserAction} from "../../reducers/registerUserAction";


export const registerUsersStep = (device, user, board, clicksList, setRegisteredState, registeredState) => {
    _registerUserAction({
        userId: user.id,
        device: device,
        action: `game.user.step`,
        state: "success",
        data: {
            board,
            clicksList
        },
        userAgent: navigator.userAgent
    }, {'x-api-key-': registeredState})
        .then((res)=>{
            setRegisteredState(res.data['x-api-key']);
        })
        .catch((e)=>{
            console.log(e);
        });
}