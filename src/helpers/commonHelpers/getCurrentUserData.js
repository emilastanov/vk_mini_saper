import bridge from '@vkontakte/vk-bridge';
import {registerCurrentUserClientData} from "./registerCurrentUserClientData";
import {getBanList} from "../../reducers/getBanList";
import {showOnBoardingIfItDidNotShow} from "./showOnBoardingIfItDidNotShow";


export const getCurrentUserData = (setCurrentUserData, setUserDevice, setIsBanned) => {

    bridge.send('VKWebAppGetUserInfo').then((data)=>{
        setCurrentUserData(data);
        getBanList({userId: data.id}).then((entity)=>{
            setIsBanned(entity?.data.banned);
        }).catch((e)=>{
            setIsBanned(false);
            console.log(e);
        });
        registerCurrentUserClientData(data.id, setUserDevice);
        showOnBoardingIfItDidNotShow(data.id);
    }).catch((e)=>{
        setCurrentUserData(false);
        console.log(e);
    });
}
