import {registerUserAction} from "../../reducers/registerUserAction";

export const registerCurrentUserClientData = (bridge, userId) => {
    bridge.send('VKWebAppGetClientVersion').then((data)=>{

        registerUserAction({
            userId: userId,
            device: data,
            action: "application.opened",
            state: "success"
        }).catch((e)=>{
            console.log(e);
        });
    }).catch((e)=>{
        console.log(e);
    })
}
