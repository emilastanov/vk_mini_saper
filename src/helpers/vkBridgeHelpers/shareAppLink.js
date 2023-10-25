import bridge from "@vkontakte/vk-bridge";
import {appLink} from "../../static/texts/postsData";
import {savePostDataInStorage} from "../commonHelpers";

export const shareAppLink = () => {
    bridge.send('VKWebAppShare', { link: appLink })
        .then(data=>{
            const result = data.items ?? data.result;
            console.log(result)
            if ((result[0].type === 'post') || (result[0].type === 'wall')){
                savePostDataInStorage({
                    post_id: result[0].post_id.split('_')[1]
                });
            }
        })
        .catch(e=>console.log(e));
}
