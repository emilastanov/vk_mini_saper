import {registerCurrentUserClientData} from "./registerCurrentUserClientData";

export const getCurrentUserData = (bridge, setCurrentUserData, setUserDevice) => {
    bridge.send('VKWebAppGetUserInfo').then((data)=>{
        setCurrentUserData(data);

        registerCurrentUserClientData(bridge, data.id, setUserDevice);
    }).catch((e)=>{
        setCurrentUserData(false);
        console.log(e);
    })
}
