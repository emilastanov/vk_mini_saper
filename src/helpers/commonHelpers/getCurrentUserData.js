import {registerCurrentUserClientData} from "./registerCurrentUserClientData";

export const getCurrentUserData = (bridge, setCurrentUserData) => {
    bridge.send('VKWebAppGetUserInfo').then((data)=>{
        setCurrentUserData(data);

        registerCurrentUserClientData(bridge, data.id);
    }).catch((e)=>{
        setCurrentUserData(false);
        console.log(e);
    })
}
