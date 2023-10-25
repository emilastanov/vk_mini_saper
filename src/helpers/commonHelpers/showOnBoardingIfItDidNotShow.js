import {getVariables, setVariable} from "../vkBridgeHelpers";
import {showInformationScreen} from "../vkBridgeHelpers/showInformationScreen";
import {onBoardingScreensData} from "../../static/texts/onBoardingScreensData";
import {showSwitchOfAdsTip} from "./showSwitchOfAdsTip";
import {switchOffAdsTipData} from "../../static/texts/switchOffAdsTipData";

export const showOnBoardingIfItDidNotShow = (userId) => {
    getVariables(['didOnBoarding']).then((res)=>{
        if(!!res.keys?.[0].value) {
            showSwitchOfAdsTip(userId);
            console.log('Already onboarded.');
        } else {
            showInformationScreen([
                ...onBoardingScreensData,
                ...switchOffAdsTipData
            ])
                .then(_=>{
                    setVariable({
                        key: 'didOnBoarding',
                        value: 'true'
                    });
                    console.log('OnBoarding did not show.');
                })
                .catch(e=>{console.log('screen',e)});
        }
    })
};
