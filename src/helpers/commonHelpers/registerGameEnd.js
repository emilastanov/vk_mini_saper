import {registerUserAction} from "../../reducers/registerUserAction";
import {setUserRecord} from "../../reducers/setUserRecord";
import {deviceCoder} from "../../static/texts/boardData";
import {deviceIdCoder} from "./deviceIdCoder";
import {checkConstants} from "./checkConstants";

export const registerGameEnd = (device, user, success, userRecord, size, board, clicksList, xCodes) => {
    const deviceId = deviceIdCoder(`${device.deviceId * deviceCoder}`);

    delete device.deviceId;
    registerUserAction({
        userId: user.id,
        device: device,
        action: `game.end.${success ? 'win' : 'fail'}`,
        state: "success",
        data: {
            board,
            clicksList
        },
        userAgent: navigator.userAgent
    }, {'x-device-id': deviceId})
        .then((res)=>{
            const xCode = res.data?.code;
            let xCodesStr = '';
            if (xCode) {
                xCodesStr = [...xCodes, xCode].join(',');
            }

            success && setUserRecord({
                userId: user.id,
                firstName: user.first_name,
                lastName: user.last_name,
                photo: user.photo_100,
                difficulty: size,
                recordTime: userRecord,
                device: device
            }, {
                "x-api-key": res?.data['x-api-key'],
                "x-value": checkConstants(board, size),
                "x-code": xCodesStr
            }).catch((e)=>{
                console.log(e)
            });
        })
        .catch((e)=>{
            console.log(e);
        });
}
