import {registerUserAction} from "../../reducers/registerUserAction";
import {setUserRecord} from "../../reducers/setUserRecord";

export const registerGameEnd = (device, user, success, userRecord, size) => {
    registerUserAction({
        userId: user.id,
        device: device,
        action: `game.end.${success ? 'win' : 'fail'}`,
        state: "success",
        userAgent: navigator.userAgent
    })
        .then((res)=>{
            success && setUserRecord({
                userId: user.id,
                firstName: user.first_name,
                lastName: user.last_name,
                photo: user.photo_100,
                difficulty: size,
                recordTime: userRecord,
                device: device
            }, {"x-api-key": res?.data['x-api-key']}).catch((e)=>{
                console.log(e)
            });
        })
        .catch((e)=>{
            console.log(e);
        });
}