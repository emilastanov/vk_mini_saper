import {registerCurrentUserClientData} from "./registerCurrentUserClientData";
import {getBanList} from "../../reducers/getBanList";

export const getCurrentUserData = (bridge, setCurrentUserData, setUserDevice, setIsBanned) => {
    bridge.send('VKWebAppGetUserInfo').then((data)=>{
        setCurrentUserData(data);
        getBanList({userId: data.id}).then((entity)=>{
            setIsBanned(entity?.data.banned);
        }).catch((e)=>{
            setIsBanned(false);
            console.log(e);
        });
        registerCurrentUserClientData(bridge, data.id, setUserDevice);
    }).catch((e)=>{
        setCurrentUserData(false);
        console.log(e);
    })
}
