import {getLeaderboard} from "../../reducers/getLeaderboard";

export const getLeaderboardByDifficulty = (difficulty, userId=null, setResult) => {
    getLeaderboard({difficulty, userId})
        .then((res)=>{
            setResult(res?.data);
        })
        .catch((e)=>{
            console.log(e);
        })
};
