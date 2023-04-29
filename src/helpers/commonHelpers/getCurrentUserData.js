import {registerUserAction} from "../../reducers/registerUserAction";

export const getCurrentUserData = (bridge, setCurrentUserData) => {
    bridge.send('VKWebAppGetUserInfo').then((data)=>{
        setCurrentUserData(data);

        registerUserAction({
            userId: data.id,
            device: navigator.userAgent,
            action: "application.opened",
            state: "success"
        }).catch((e)=>{
            console.log(e);
        });
    }).catch((e)=>{
        setCurrentUserData(false);
        console.log(e);
    })
}
