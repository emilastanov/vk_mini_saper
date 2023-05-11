import {sendWallPost} from "../vkBridgeHelpers";
import {wallPost, appLink} from "../../static/texts/postsData";
import {categories} from "../../static/texts/leaderboardData";
import {makeStopwatchString} from "../commonHelpers/makeStopwatchString";

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
            console.log(data)
        })
        .catch((error) => {
            console.log(error);
        });
}
