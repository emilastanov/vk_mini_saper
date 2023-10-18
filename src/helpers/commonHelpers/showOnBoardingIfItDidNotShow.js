import {getVariables, setVariable} from "../vkBridgeHelpers";
import {showInformationScreen} from "../vkBridgeHelpers/showInformationScreen";
import {onBoardingScreensData} from "../../static/texts/onBoardingScreensData";

export const showOnBoardingIfItDidNotShow = () => {
    getVariables(['didOnBoarding']).then((res)=>{
        if(!!res.keys?.[0].value) {
            console.log('Already onboarded.');
        } else {
            showInformationScreen(onBoardingScreensData)
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
