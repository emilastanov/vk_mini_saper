import {registerUserAction} from "../../reducers/registerUserAction";

export const registerCurrentUserClientData = (bridge, userId, setUserDevice) => {
    bridge.send('VKWebAppGetClientVersion').then((data)=>{
        setUserDevice(data);
        registerUserAction({
            userId: userId,
            device: data,
            action: "application.opened",
            state: "success",
            userAgent: navigator.userAgent
        }).catch((e)=>{
            console.log(e);
        });
    }).catch((e)=>{
        registerUserAction({
            userId: userId,
            device: {},
            action: "application.opened",
            state: "error",
            userAgent: navigator.userAgent
        }).catch((e)=>{
            console.log(e);
        });
    })
}
