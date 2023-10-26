import { getVariables } from "../vkBridgeHelpers";
import { checkPost } from "../../reducers/checkPost";

export const checkPostDataInStorage = async (userId) => {
    if (!userId) return false;

    try {
        const wallPostData = await getVariables(["wall_post_created", "wall_post_id"]);

        const { wall_post_created, wall_post_id } = Object.fromEntries(
            wallPostData?.keys.map(item => [item.key, item.value])
        );

        if (!wall_post_id) {
            console.log("Current user does not have the post.");
            return false;
        }

        const checkPostResponse = await checkPost({ owner_id: userId, post_id: wall_post_id });
        const isPostExist = checkPostResponse?.data.result;

        if (isPostExist) {
            const timestamp = Date.now();
            return parseInt(wall_post_created) + 604800000 - timestamp > 0;
        } else {
            console.log("Current user removed the post.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }

    return false;
};
