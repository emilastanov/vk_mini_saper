import {showInformationScreen} from "../vkBridgeHelpers/showInformationScreen";
import {switchOffAdsTipData} from "../../static/texts/switchOffAdsTipData";
import {checkPostDataInStorage} from "./checkPostDataInStorage";

export const showSwitchOfAdsTip = (userId) => {
    checkPostDataInStorage(userId).then(res=>{
        if (!res) {
            showInformationScreen(switchOffAdsTipData)
                .catch(e => console.log(e));
        }
    });
}
