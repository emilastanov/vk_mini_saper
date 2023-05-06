import axios from 'axios';
import {SAPER_METHODS} from "../static/constants/hostList";

export async function setUserRecord({userId, firstName, lastName, photo, recordTime, difficulty, device}, headers) {
    return axios.post(SAPER_METHODS.LEADERBOARD, {
        userId, firstName, lastName, photo, recordTime, difficulty, device
    }, {headers});
}
