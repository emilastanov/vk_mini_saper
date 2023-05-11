import {sendWallPost} from "../vkBridgeHelpers";
import {wallPost, appLink} from "../../static/texts/postsData";
import {categories} from "../../static/texts/leaderboardData";
import {makeStopwatchString} from "../commonHelpers/makeStopwatchString";
import {registerWallPost} from "../commonHelpers/registerWallPost";

export const makeWallPost = (userData) => {
    sendWallPost({
        message: wallPost.format({
            pos: userData.pos,
            difficulty: categories.find((category=>category.value === userData.user.difficulty)).label,
            recordTime: makeStopwatchString(userData.user.recordTime)
        }),
        attachments: appLink
    })
        .then((data)=>{
            userData.post = data;
            registerWallPost(userData, true);
        })
        .catch((error) => {
            userData.error = error;
            registerWallPost(userData, false);
        });
}
