import {setVariable} from "../vkBridgeHelpers";

export const savePostDataInStorage = (data) => {
    const currentDate = new Date();
    console.log('asdasdcas',data)
    setVariable({
        key: "wall_post_id",
        value: `${data.post_id}`
    });
    setVariable({
        key: "wall_post_created",
        value: `${currentDate.getTime()}`
    })
}
